import type { App } from 'vue'

import * as comps from './import'

export const verus = {
  install(app: App) {
    for (const i in comps) app.use(comps[<keyof typeof comps>i])
  }
}
