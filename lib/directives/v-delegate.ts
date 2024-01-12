import type { DirectiveBinding, ObjectDirective } from 'vue'

export type VDelegateElement = HTMLElement & { [event: `$$${string}`]: Function }

export const vDelegate: ObjectDirective = {
  mounted(el: VDelegateElement, { arg, value }: DirectiveBinding<Function>) {
    console.log(value)
    arg && typeof value == 'function' && (el[`$$${arg}`] = value)
  },
  unmounted(el: VDelegateElement) {
    delete el.$$click
  }
}
