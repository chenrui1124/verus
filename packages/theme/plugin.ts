import type { CSSInJS } from 'mm3'

import plugin from 'tailwindcss/plugin'
import { COLORS, COLORS_WHEN_DANGER, extractRGBValueReducer, withColorPrefix } from './colors'

export default function () {
  const colors = extractRGBValueReducer(COLORS)

  const colorsWhenDanger = extractRGBValueReducer(COLORS_WHEN_DANGER)

  const { base, utilities, components } = {
    base: {
      '::before, ::after': { '--tw-content': `''` },
      ':root, [data-name="theme-provider"][data-theme="light"]': colors.light,
      ':is(:root, [data-name="theme-provider"])[data-theme="dark"]': colors.dark,
      ':is(:root, [data-name="theme-provider"][data-theme="light"]) :is([data-danger=""], [data-danger="true"])':
        colorsWhenDanger.light,
      ':is(:root, [data-name="theme-provider"])[data-theme="dark"] :is([data-danger=""], [data-danger="true"])':
        colorsWhenDanger.dark,
      '@media (prefers-color-scheme: dark)': {
        ':is(:root, [data-name="theme-provider"])[data-theme="auto"]': colors.dark,
        ':is(:root, [data-name="theme-provider"])[data-theme="auto"] :is([data-danger=""], [data-danger="true"])':
          colorsWhenDanger.dark
      }
    },

    utilities: theme => ({
      '.v-outline': {
        outline: `2.8px solid rgba(var(${withColorPrefix('pri')}), ${theme('opacity.48')})`,
        outlineOffset: '1.2px'
      },
      '.v-disabled': {
        opacity: theme('opacity.48'),
        pointerEvents: 'none'
      }
    }),

    components: {
      '.v-shade': {
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        borderRadius: 'inherit'
      }
    }
  } satisfies {
    base: CSSInJS | { [p: string]: CSSInJS }
    utilities: (theme: (path: string) => string) => CSSInJS
    components: CSSInJS
  }

  return plugin(({ theme, addBase, addUtilities, addComponents }) => {
    addBase(base)
    addUtilities(utilities(theme))
    addComponents(components)
  })
}
