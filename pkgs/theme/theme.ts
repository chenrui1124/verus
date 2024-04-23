import type { Config } from 'tailwindcss'

import { themeReducer } from 'mm3'
import { VERUS_COLOR, withColorPrefix } from './colors'

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
    v2: '0.6rem',
    v3: '0.8rem',
    full: '9999px'
  },
  colors: ({ colors }) => ({
    black: colors.black,
    white: colors.white,
    inherit: colors.inherit,
    current: colors.current,
    transparent: colors.transparent,
    ...themeReducer(
      Object.keys(VERUS_COLOR),
      name => `rgba(var(${withColorPrefix(name)}), <alpha-value>)`
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
    },
    keyframes: {
      loading: {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(400%)' }
      }
    },
    animation: {
      loading: 'loading 3s infinite'
    }
  }
} satisfies Config['theme']
