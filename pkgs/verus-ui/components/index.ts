import '@verus-ui/css'

export * from './no-render'
export * from './ui'
export * from './use'
export { verus } from './install'

/*
 * No Render
 */
declare module 'vue' {
  interface GlobalComponents {
    VIterate: typeof import('@verus-ui/components').VIterate
    VThemeProvider: typeof import('@verus-ui/components').VThemeProvider
  }
}

/*
 * UI
 */
declare module 'vue' {
  interface GlobalComponents {
    VAccordion: typeof import('@verus-ui/components').VAccordion
    VAutoGrid: typeof import('@verus-ui/components').VAutoGrid
    VChips: typeof import('@verus-ui/components').VChips
    VButton: typeof import('@verus-ui/components').VButton
    VCard: typeof import('@verus-ui/components').VCard
    VFloatButton: typeof import('@verus-ui/components').VFloatButton
    VIconButton: typeof import('@verus-ui/components').VIconButton
    VDialog: typeof import('@verus-ui/components').VDialog
    VModal: typeof import('@verus-ui/components').VModal
    VRadios: typeof import('@verus-ui/components').VRadios
    VSegmentedButton: typeof import('@verus-ui/components').VSegmentedButton
    VScaffold: typeof import('@verus-ui/components').VScaffold
    VSwitch: typeof import('@verus-ui/components').VSwitch
    VTextField: typeof import('@verus-ui/components').VTextField
    VTooltip: typeof import('@verus-ui/components').VTooltip
  }
}
