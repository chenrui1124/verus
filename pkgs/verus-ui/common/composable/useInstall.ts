import type { App, Plugin } from 'vue'

export function useInstall<
  T extends {
    [prop: string | number | symbol]: any
    name: string
    displayName?: string
  }
>(comp: T) {
  const plugin = comp as T & Plugin

  plugin.install = (app: App) => app.component(comp.displayName ?? comp.name, comp)

  return plugin
}
