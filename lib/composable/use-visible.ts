import type { Ref } from 'vue'

import { ref } from 'vue'

export function useVisible(options?: {
  model?: Ref<boolean | undefined>
  beforeOpen?: () => void
  beforeClose?: () => void
}) {
  const visible = options?.model ?? ref()

  return {
    visible,

    open() {
      options?.beforeOpen?.()
      requestAnimationFrame(() => void (visible.value = true))
    },

    close() {
      options?.beforeClose?.()
      requestAnimationFrame(() => void (visible.value = false))
    },

    toggle() {
      visible.value ? options?.beforeClose?.() : options?.beforeOpen?.()
      requestAnimationFrame(() => void (visible.value = !visible.value))
    },

    openWith(callback?: Function) {
      callback?.()
      options?.beforeOpen?.()
      requestAnimationFrame(() => void (visible.value = true))
    },

    async closeWith(callback?: Function) {
      await callback?.()
      options?.beforeClose?.()
      requestAnimationFrame(() => void (visible.value = false))
    }
  }
}
