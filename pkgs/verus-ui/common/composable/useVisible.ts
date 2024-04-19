import type { Ref } from 'vue'

import { computed, ref } from 'vue'

export function useVisible(options?: {
  model?: Ref<boolean | undefined>
  onBeforeShow?: () => void
  onBeforeClose?: () => void
}) {
  const _state = options?.model ?? ref()

  const state = computed<boolean | undefined>({
    get() {
      return _state.value
    },
    set(newValue: boolean | undefined) {
      if (newValue) {
        options?.onBeforeShow?.()
        requestAnimationFrame(() => void (_state.value = true))
      } else {
        options?.onBeforeClose?.()
        requestAnimationFrame(() => void (_state.value = false))
      }
    }
  })

  return {
    state,
    show() {
      state.value = true
    },
    hide() {
      state.value = false
    },
    toggle() {
      state.value = !state.value
    },
    async withHide(callback?: Function) {
      await callback?.()
      state.value = false
    }
  }
}
