import type { App } from 'vue'

import * as noRender from './no-render'
import * as ui from './ui'

export const verus = {
  install(app: App) {
    for (const i in noRender) app.use(noRender[<keyof typeof noRender>i])
    for (const i in ui) app.use(ui[<keyof typeof ui>i])
  }
}
