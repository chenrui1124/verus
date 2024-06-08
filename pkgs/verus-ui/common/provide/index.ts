import type { InjectionKey } from 'vue'

export const scaffoldKey = Symbol() as InjectionKey<{
  appendClasses: (value: string) => void
  subtractClasses: () => void
}>
