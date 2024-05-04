import type { Theme } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import ThemeProvider from './ThemeProvider.vue'

export type ThemeProviderProps = {
  global?: boolean
  tag?: string
  theme?: Theme
}

export interface ThemeProviderSlots {
  default(): any
}

export const EACH_THEME: Theme[] = ['auto', 'dark', 'light'] as const

export const VThemeProvider = useInstall(
  ThemeProvider as unknown as new () => {
    $props: ThemeProviderProps
    $emit: (name: 'change', newThemeValue: ThemeProviderProps['theme']) => void
    $slots: ThemeProviderSlots
  }
)
