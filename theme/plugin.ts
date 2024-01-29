import type { CSSInJS } from 'mm3'
import type { VColors } from './colors'

import { vColors, toVar } from './colors'
import plugin from 'tailwindcss/plugin'

const custom = {
  base: {
    '::before, ::after': {
      '--tw-content': `''`
    },
    ':root': Object.keys(vColors).reduce<Record<string, string>>((vars, v) => {
      vars[toVar(<VColors>v)] = vColors[<VColors>v][0]
      return vars
    }, {}),
    ':root:is(.dark)': Object.keys(vColors).reduce<Record<string, string>>((vars, v) => {
      vars[toVar(<VColors>v)] = vColors[<VColors>v][1]
      return vars
    }, {})
  },

  utilities: theme => ({
    '.v-outline-none': {
      outline: '0px solid transparent',
      outlineOffset: '2px'
    },
    '.v-outline': {
      outline: `2px solid rgba(var(${toVar('pri')}), ${theme('opacity.48')})`,
      outlineOffset: '2px'
    },
    '.v-outline-danger': {
      outline: `2px solid rgba(var(${toVar('err')}), ${theme('opacity.48')})`,
      outlineOffset: '2px'
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
  base: CSSInJS
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
