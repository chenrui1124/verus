import type { App, Plugin } from 'vue'

export function toPlugin<T>(comp: T) {
  ;(<T & Plugin>comp).install = (app: App) => {
    app.component(`V${(<any>comp).name}`, <any>comp)
  }
  return comp as T & Plugin
}
