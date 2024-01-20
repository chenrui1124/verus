import type { Config } from 'tailwindcss'
import type { VColors } from './colors'

import { themeReducer } from 'mm3'
import { vColors, toVar } from './colors'

export default {
  opacity: {
    0: '0',
    8: '0.08',
    12: '0.12',
    16: '0.16',
    32: '0.32',
    48: '0.48',
    72: '0.72',
    100: '1'
  },
  borderRadius: {
    inherit: 'inherit',
    none: '0',
    v1: '0.4rem',
    v2: '0.8rem',
    v3: '1.2rem',
    full: '9999px'
  },
  colors: ({ colors }) => ({
    black: colors.black,
    white: colors.white,
    inherit: colors.inherit,
    current: colors.current,
    transparent: colors.transparent,
    ...themeReducer(
      Object.keys(vColors),
      name => `rgba(var(${toVar(<VColors>name)}), <alpha-value>)`
    )
  }),
  extend: {
    transitionTimingFunction: {
      inherit: 'inherit',
      braking: 'cubic-bezier(0.36, 0.72, 0, 1)'
    },
    transitionDuration: {
      inherit: 'inherit'
    },
    lineHeight: ({ theme }) => ({
      12: theme('height.12')
    }),
    gap: {
      inherit: 'inherit'
    },
    borderWidth: {
      v1: '1.2px'
    }
  }
} satisfies Config['theme']
