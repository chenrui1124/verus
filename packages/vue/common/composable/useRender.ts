import type { DefineSetupFnComponent, FunctionalComponent, ShallowReactive } from 'vue'

import { Fragment, defineComponent, h, render, shallowReactive } from 'vue'

type RenderedComponent = DefineSetupFnComponent<any> | FunctionalComponent

export function useRenderFactory() {
  let components: ShallowReactive<RenderedComponent[]>

  function initRender() {
    components = shallowReactive<RenderedComponent[]>([])
    const SingleComponents = defineComponent(() => {
      return () =>
        h(
          Fragment,
          components.map(comp => h(comp))
        )
    })
    render(h(SingleComponents), document.body)
  }

  return function (comp: RenderedComponent) {
    if (!components) initRender()
    components.push(comp)
  }
}

export const useRender = useRenderFactory()
