import '@verus-ui/css'

import * as noRender from './no-render'
import * as ui from './ui'

declare module 'vue' {
  export interface GlobalComponents {
    VIterate: typeof noRender.VIterate
    VThemeProvider: typeof noRender.VThemeProvider
    VAccordion: typeof ui.VAccordion
    VAutoGrid: typeof ui.VAutoGrid
    VChips: typeof ui.VChips
    VButton: typeof ui.VButton
    VCard: typeof ui.VCard
    VFloatButton: typeof ui.VFloatButton
    VIconButton: typeof ui.VIconButton
    VDialog: typeof ui.VDialog
    VModal: typeof ui.VModal
    VRadios: typeof ui.VRadios
    VSegmentedButton: typeof ui.VSegmentedButton
    VScaffold: typeof ui.VScaffold
    VSwitch: typeof ui.VSwitch
    VTextField: typeof ui.VTextField
    VTooltip: typeof ui.VTooltip
  }
}

export * from './no-render'
export * from './ui'
export * from './use'
export { verus } from './install'
