import type { Config } from 'tailwindcss'

import { verus } from '@verus-ui/theme'

export default {
  content: ['src/**/*.{vue,ts,tsx}'],
  darkMode: 'class',
  theme: verus.theme,
  plugins: [verus.plugin()]
} satisfies Config
