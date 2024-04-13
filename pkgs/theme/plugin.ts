import type { CSSInJS } from 'mm3'
import type { VColors } from './colors'

import { vColors, toVar } from './colors'
import plugin from 'tailwindcss/plugin'

const custom = {
  base: {
    '::before, ::after': {
      '--tw-content': `''`
    },
    ':root[data-theme="light"],:root[data-theme="auto"]': Object.keys(vColors).reduce<
      Record<string, string>
    >((vars, v) => {
      vars[toVar(<VColors>v)] = vColors[<VColors>v][0]
      return vars
    }, {}),
    ':root[data-theme="dark"]': Object.keys(vColors).reduce<Record<string, string>>((vars, v) => {
      vars[toVar(<VColors>v)] = vColors[<VColors>v][1]
      return vars
    }, {}),
    '@media (prefers-color-scheme: dark)': {
      ':root[data-theme="auto"]': Object.keys(vColors).reduce<Record<string, string>>((vars, v) => {
        vars[toVar(<VColors>v)] = vColors[<VColors>v][1]
        return vars
      }, {})
    }
  },

  utilities: theme => ({
    '.v-outline': {
      outline: `2.8px solid rgba(var(${toVar('pri')}), ${theme('opacity.48')})`,
      outlineOffset: '1.2px'
    },
    '.v-outline-danger': {
      outline: `2.8px solid rgba(var(${toVar('err')}), ${theme('opacity.48')})`,
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
  },

  variants: [
    ['hover&focus', ['&:hover', '&:focus']],
    ['before&after', ['&:before', '&:after']]
  ]
} satisfies {
  base: CSSInJS & { [p: string]: CSSInJS }
  utilities: (theme: (path: string) => string) => CSSInJS
  components: CSSInJS
  variants: [string, string[]][]
}

export default function () {
  return plugin(({ theme, addBase, addUtilities, addComponents, addVariant }) => {
    addBase(custom.base)
    addUtilities(custom.utilities(theme))
    addComponents(custom.components)
    custom.variants.forEach(arg => addVariant(...arg))
  })
}
