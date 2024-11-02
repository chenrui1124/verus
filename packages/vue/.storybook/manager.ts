import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    fontBase: 'sans-serif',
    fontCode: 'monospace',
    base: 'light',
    brandTitle: 'Verus UI'
  })
})
