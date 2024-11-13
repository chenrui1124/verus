import type { App, Component } from 'vue'

import { createApp } from 'vue'

export function useRender(comp: Component) {
  let app: App | null = null,
    root: HTMLDivElement | null = null,
    timer: number | undefined

  return [
    function mount() {
      if (timer) {
        clearTimeout(timer)
        timer = void 0
      }
      if (app) return
      app = createApp(comp)
      root = document.createElement('div')
      document.body.appendChild(root)
      app.mount(root)
    },
    function unmount(options?: {
      /**
       * Unit: ms.
       */
      delay?: number
    }) {
      if (!app || timer) return
      requestIdleCallback(() => {
        timer = window.setTimeout(() => {
          app?.unmount()
          root?.remove()
          app = root = null
          timer = void 0
        }, options?.delay)
      })
    }
  ]
}
