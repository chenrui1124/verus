declare module 'vue' {
  export interface GlobalComponents {
    VAccordion: typeof import('@components').VAccordion
    VAutoGrid: typeof import('@components').VAutoGrid
    VBreadcrumbs: typeof import('@components').VBreadcrumbs
    VButton: typeof import('@components').VButton
    VCard: typeof import('@components').VCard
    VFloatButton: typeof import('@components').VFloatButton
    VIconButton: typeof import('@components').VIconButton
    VIterate: typeof import('@components').VIterate
    VModal: typeof import('@components').VModal
    VRadios: typeof import('@components').VRadios
    VSegmentedButton: typeof import('@components').VSegmentedButton
    VSwitch: typeof import('@components').VSwitch
    VTextField: typeof import('@components').VTextField
  }
}

export {}
