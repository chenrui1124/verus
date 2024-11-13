import type { Meta, StoryObj } from '@storybook/vue3'

import { eachStatus } from '@verus-ui/ts'
import { VTag } from '.'

const meta: Meta<typeof VTag> = {
  title: 'UI/Tag',
  component: VTag,
  argTypes: {
    icon: { control: false },
    label: { control: 'text' },
    status: { control: 'select', options: eachStatus() }
  },
  args: {
    label: 'Lorem ipsum dolor sit.'
  }
}

export default meta

type Story = StoryObj<typeof VTag>

export const Default: Story = { args: { status: 'default' } }

export const Primary: Story = { args: { status: 'primary' } }

export const Success: Story = { args: { status: 'success' } }

export const Warning: Story = { args: { status: 'warning' } }

export const Error: Story = { args: { status: 'error' } }

export const WithIcon: Story = { args: { icon: 'i-ri:error-warning-fill', status: 'warning' } }
