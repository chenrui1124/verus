import type { Theme } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import ThemeProvider from './ThemeProvider'

export type ThemeProviderProps = {
  tag?: string
  persist?: boolean
}

export interface ThemeProviderSlots {
  default(): any
}

export interface ThemeProviderModel {
  theme: Theme | undefined
}

export const EACH_THEME: Theme[] = ['auto', 'dark', 'light'] as const

export const VThemeProvider = useInstall(
  ThemeProvider as unknown as new () => {
    $props: ThemeProviderProps
    $emit: (name: 'update:theme', newThemeValue: ThemeProviderModel['theme']) => void
    $slots: ThemeProviderSlots
  }
)
