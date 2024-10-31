import type { Config } from 'tailwindcss'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import plugin from './plugin'
import theme from './theme'

export default {
  theme,
  plugins: [addDynamicIconSelectors({ prefix: 'i' }), plugin()],
  corePlugins: { preflight: false }
} satisfies Omit<Config, 'content'>
