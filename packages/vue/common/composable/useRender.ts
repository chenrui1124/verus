import { createApp, type App, type Component } from 'vue'
import { withTimeout } from '@verus-ui/common'

export function useRender(comp: Component) {
  const [start, stop] = withTimeout()

  const [render, destroy] = (() => {
    let inst: App | null = null
    let root: HTMLElement | null = null

    return [
      (...args: Parameters<typeof createApp>) => {
        if (inst && root) return
        root = document.createElement('div')
        document.body.appendChild(root)
        inst = createApp(...args)
        inst.mount(root)
      },
      () => {
        if (inst) {
          inst.unmount()
          inst = null
        }
        if (root) {
          root.remove()
          root = null
        }
      }
    ]
  })()

  function mount() {
    stop()
    render(comp)
  }

  function unmount(): void
  function unmount(options: { delay: number }): Promise<void>
  function unmount(options?: { delay: number }) {
    if (options && options.delay) {
      return start(() => requestIdleCallback(destroy), options.delay)
    } else {
      destroy()
    }
  }

  return [mount, unmount] as const
}
