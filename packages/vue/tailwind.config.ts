import type { Config } from 'tailwindcss'

import preset from '@verus-ui/theme'

export default {
  content: ['**/*.{vue,ts,tsx}', '!**/node_modules/**'],
  presets: [preset]
} satisfies Config
