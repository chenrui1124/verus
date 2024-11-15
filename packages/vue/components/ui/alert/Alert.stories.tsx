import type { Meta, StoryObj } from '@storybook/vue3'

import { eachStatus } from '@verus-ui/ts'
import { VAlert } from '.'

const meta: Meta<typeof VAlert> = {
  title: 'UI/Alert',
  component: VAlert,
  argTypes: {
    icon: { control: false },
    title: { control: { type: 'text' } },
    status: { control: { type: 'select' }, options: eachStatus() }
  },
  render(args) {
    return () => (
      <VAlert {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat placeat, eaque saepe
        magnam odio dolor ea libero quasi odit?
      </VAlert>
    )
  }
}

export default meta

type Story = StoryObj<typeof VAlert>

export const Default: Story = {}

export const Primary: Story = { args: { status: 'primary' } }

export const Success: Story = { args: { status: 'success' } }

export const Warning: Story = { args: { status: 'warning' } }

export const Error: Story = { args: { status: 'error' } }

export const WithIcon: Story = { args: { icon: 'i-ri:code-fill', status: 'primary' } }

export const WithTitle: Story = {
  args: { icon: 'i-ri:error-warning-fill', title: 'Lorem', status: 'error' }
}
