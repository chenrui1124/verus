import type { Config } from 'tailwindcss'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { verus } from '@verus-ui/theme'

export default {
  content: ['**/*.{vue,ts,tsx}'],

  darkMode: 'class',

  theme: verus.theme,

  plugins: [addDynamicIconSelectors({ prefix: 'i' }), verus.plugin()],

  corePlugins: { preflight: false }
} satisfies Config
