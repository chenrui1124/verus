import { useInstall } from '@verus-ui/common'
import ThemeProvider from './ThemeProvider'

export type * from './ThemeProvider'

export const VThemeProvider = useInstall(ThemeProvider)
