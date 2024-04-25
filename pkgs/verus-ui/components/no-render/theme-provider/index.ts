import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import ThemeProvider from './ThemeProvider.vue'

export type ThemeProviderProps = {
  global?: boolean
  tag?: string
  theme?: VerusProps.Theme
}

export const VThemeProvider = toPlugin(ThemeProvider)
