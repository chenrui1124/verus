import type { Ref } from 'vue'

import { computed, ref } from 'vue'

export function useToggle(options?: {
  modelValue?: Ref<boolean | undefined>
  afterSetFalse?: Function
  beforeSetTrue?: Function
}) {
  const _state = options?.modelValue ?? ref()

  const state = computed<boolean | undefined>({
    get() {
      return _state.value
    },
    set(newValue: boolean | undefined) {
      if (newValue) {
        options?.beforeSetTrue?.()
        requestAnimationFrame(() => void (_state.value = true))
      } else {
        requestAnimationFrame(() => void (_state.value = false))
        options?.afterSetFalse?.()
      }
    }
  })

  return {
    state,
    on() {
      state.value || (state.value = true)
    },
    off() {
      state.value && (state.value = false)
    },
    toggle() {
      state.value = !state.value
    },
    async withOff(callback?: Function) {
      this.off()
      await callback?.()
    }
  }
}
