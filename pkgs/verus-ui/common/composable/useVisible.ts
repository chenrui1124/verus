import type { Ref } from 'vue'

import { ref } from 'vue'

export function useVisible(options?: {
  model?: Ref<boolean | undefined>
  onBeforeShow?: () => void
  onBeforeClose?: () => void
}) {
  const state = options?.model ?? ref()

  return {
    state,

    show() {
      options?.onBeforeShow?.()
      requestAnimationFrame(() => void (state.value = true))
    },

    hide() {
      options?.onBeforeClose?.()
      requestAnimationFrame(() => void (state.value = false))
    },

    toggle() {
      state.value ? options?.onBeforeClose?.() : options?.onBeforeShow?.()
      requestAnimationFrame(() => void (state.value = !state.value))
    },

    withShow(callback?: Function) {
      callback?.()
      options?.onBeforeShow?.()
      requestAnimationFrame(() => void (state.value = true))
    },

    async withHide(callback?: Function) {
      await callback?.()
      options?.onBeforeClose?.()
      requestAnimationFrame(() => void (state.value = false))
    }
  }
}
