import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import ThemeProvider from './ThemeProvider'

export type ThemeProviderProps = {
  tag?: string
  theme?: VerusProps.Theme
  global?: boolean
}

export const VThemeProvider = toPlugin(ThemeProvider)
