import type { Meta, StoryObj } from '@storybook/vue3'

import { eachTheme } from '@verus-ui/ts'
import { VButton } from '@verus-ui/components'
import { VThemeProvider } from '.'

const meta: Meta<typeof VThemeProvider> = {
  title: 'No Render/ThemeProvider',
  /** @ts-ignore */
  component: VThemeProvider,
  argTypes: {
    tag: { control: 'text' },
    theme: { control: 'select', options: eachTheme() },
    persist: { control: 'boolean' }
  },
  args: {
    theme: 'auto'
  },
  render(args) {
    return () => (
      <VThemeProvider {...args}>
        <VButton variant='solid'>Button</VButton>
      </VThemeProvider>
    )
  }
}

export default meta

type Story = StoryObj<typeof VThemeProvider>

export const Default: Story = {}
