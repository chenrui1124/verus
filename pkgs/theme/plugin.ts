import type { CSSInJS } from 'mm3'

import { VERUS_COLOR, extractRGBValue, withColorPrefix } from './colors'
import plugin from 'tailwindcss/plugin'

const custom = {
  base: {
    '::before, ::after': {
      '--tw-content': `''`
    },

    ':root, [data-theme-provider][data-theme="light"]': Object.entries(VERUS_COLOR).reduce<
      Record<string, string>
    >((previous, current) => {
      const [name, { lt }] = current
      previous[withColorPrefix(name)] = extractRGBValue(lt)
      return previous
    }, {}),

    ':root[data-theme="dark"], [data-theme-provider][data-theme="dark"]': Object.entries(
      VERUS_COLOR
    ).reduce<Record<string, string>>((previous, current) => {
      const [name, { dk }] = current
      previous[withColorPrefix(name)] = extractRGBValue(dk)
      return previous
    }, {}),

    '@media (prefers-color-scheme: dark)': {
      ':root[data-theme="auto"], [data-theme-provider][data-theme="auto"]': Object.entries(
        VERUS_COLOR
      ).reduce<Record<string, string>>((previous, current) => {
        const [name, { dk }] = current
        previous[withColorPrefix(name)] = extractRGBValue(dk)
        return previous
      }, {})
    }
  },

  utilities: theme => ({
    '.v-outline': {
      outline: `2.8px solid rgba(var(${withColorPrefix('pri')}), ${theme('opacity.48')})`,
      outlineOffset: '1.2px'
    },
    '.v-outline-danger': {
      outline: `2.8px solid rgba(var(${withColorPrefix('err')}), ${theme('opacity.48')})`,
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

export default function () {
  return plugin(({ theme, addBase, addUtilities, addComponents }) => {
    addBase(custom.base)
    addUtilities(custom.utilities(theme))
    addComponents(custom.components)
  })
}
