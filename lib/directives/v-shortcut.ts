import type { DirectiveBinding, ObjectDirective } from 'vue'

import { reactive, watch } from 'vue'

type VShortcutCallback = (e?: KeyboardEvent) => void

type VShortcutValue = [shortcut: string, callback: VShortcutCallback]

/**
 * @example v-shortcut.ctrl,alt="['k', cb]"
 */
export const vShortcut: ObjectDirective = (function () {
  const callbacks = reactive<
    Map<VShortcutCallback, { ctrl?: true; alt?: true; shift?: true; shortcut: string }>
  >(new Map())

  function onKeyup(e: KeyboardEvent) {
    callbacks.forEach((keys, cb) => {
      const { ctrl, alt, shift, shortcut } = keys

      if (e.ctrlKey == !!ctrl && e.altKey == !!alt && e.shiftKey == !!shift) {
        e.key.toLocaleLowerCase() === shortcut.toLocaleLowerCase() && cb(e)
        console.log(1)
      }
    })
  }

  watch(callbacks, () => {
    if (callbacks.size != 0) {
      document.body.addEventListener('keyup', onKeyup)
    } else {
      document.body.removeEventListener('keyup', onKeyup)
    }
  })

  return {
    mounted(_, { modifiers, value }: DirectiveBinding<VShortcutValue>) {
      if (Array.isArray(value)) {
        const [shortcut, cb] = value
        typeof cb == 'function' && callbacks.set(cb, { ...modifiers, shortcut })
      }
    },

    unmounted(_, { value }: DirectiveBinding<VShortcutValue>) {
      if (Array.isArray(value) && typeof value[1] == 'function') {
        callbacks.delete(value[1])
      }
    }
  }
})()
