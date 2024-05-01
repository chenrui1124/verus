import type { CSSInJS } from 'mm3'

import plugin from 'tailwindcss/plugin'
import { VERUS_COLOR, extractRGBValue, withColorPrefix } from './colors'

export default function () {
  const { lt, dk } = (() => {
    return Object.entries(VERUS_COLOR).reduce<{
      lt: Record<string, string>
      dk: Record<string, string>
    }>(
      (previous, current) => {
        const [name, { lt, dk }] = current
        previous.lt[withColorPrefix(name)] = extractRGBValue(lt)
        previous.dk[withColorPrefix(name)] = extractRGBValue(dk)
        return previous
      },
      { lt: {}, dk: {} }
    )
  })()

  const { base, utilities, components } = {
    base: {
      '::before, ::after': {
        '--tw-content': `''`
      },
      ':root, [data-theme-provider][data-theme="light"]': lt,
      ':root[data-theme="dark"], [data-theme-provider][data-theme="dark"]': dk,
      '@media (prefers-color-scheme: dark)': {
        ':root[data-theme="auto"], [data-theme-provider][data-theme="auto"]': dk
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

  return plugin(({ theme, addBase, addUtilities, addComponents }) => {
    addBase(base)
    addUtilities(utilities(theme))
    addComponents(components)
  })
}
