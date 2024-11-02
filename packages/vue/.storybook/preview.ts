import '@verus-ui/css'
import 'virtual:uno.css'

import type { Preview } from '@storybook/vue3'

import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { create } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      values: [
        { name: 'Light', value: 'rgb(255, 255, 255)' },
        { name: 'Dark', value: 'rgb(18, 17, 20)' }
      ]
    },
    docs: {
      theme: create({
        base: 'light',
        fontBase: 'sans-serif',
        fontCode: 'monospace'
      })
    }
  },
  tags: ['autodocs']
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Auto: 'auto',
      Light: 'light',
      Dark: 'dark'
    },
    defaultTheme: 'auto',
    attributeName: 'data-theme'
  })
]

export default preview
