import type { ShallowReactive } from 'vue'

import { Fragment, defineComponent, h, render, shallowReactive } from 'vue'

export function useRenderFactory() {
  let components: ShallowReactive<any[]>

  return (comp: any) => {
    if (components) {
      components.push(comp)
      return void 0
    } else {
      components = shallowReactive<any[]>([])
      render(
        h(
          defineComponent(() => {
            return () =>
              h(
                Fragment,
                components.map(comp => h(comp))
              )
          })
        ),
        document.body
      )
      components.push(comp)
    }
  }
}

export const useRender = useRenderFactory()
