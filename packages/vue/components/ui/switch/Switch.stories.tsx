import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { VSwitch } from '.'

const meta: Meta<typeof VSwitch> = {
  title: 'UI/Switch',
  component: VSwitch,
  argTypes: {
    disabled: { control: 'boolean' },
    modelValue: { control: 'boolean' }
  },
  args: {
    onChange: fn()
  }
}

export default meta

type Story = StoryObj<typeof VSwitch>

export const Default: Story = {}
