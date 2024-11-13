import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { VIconButton } from '.'

const meta: Meta<typeof VIconButton> = {
  title: 'UI/IconButton',
  component: VIconButton,
  argTypes: {
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: false }
  },
  args: {
    icon: 'i-ri:download-line',
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof VIconButton>

export const Default: Story = {}
