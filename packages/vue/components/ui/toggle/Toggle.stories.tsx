import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { VToggle } from '.'

const meta: Meta<typeof VToggle> = {
  title: 'UI/Toggle',
  component: VToggle,
  argTypes: {
    fallbackIcon: { control: false },
    icon: { control: false },
    label: { control: 'text' },
  },
  args: {
    onChange: fn()
  }
}

export default meta

type Story = StoryObj<typeof VToggle>

export const Default: Story = { args: { icon: 'i-ri:edit-2-fill' } }

export const WithFallback: Story = {
  args: { fallbackIcon: 'i-ri:lock-fill', icon: 'i-ri:lock-unlock-fill' }
}
