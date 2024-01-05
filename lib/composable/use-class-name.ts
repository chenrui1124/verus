import { reactive, ref } from 'vue'

export function useClassName() {
  const isApply = ref()

  function cls(className: TemplateStringsArray) {
    return reactive({ [className.join()]: isApply.value })
  }

  let timer: number | undefined

  function activate(delay: number) {
    isApply.value = true
    if (!timer) {
      timer = window.setTimeout(function () {
        requestAnimationFrame(() => {
          isApply.value = false
          timer = undefined
        })
      }, delay)
    }
  }

  return [cls, activate] as const
}
