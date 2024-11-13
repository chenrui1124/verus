import type { Meta, StoryObj } from '@storybook/vue3'

import { eachVariant } from '@verus-ui/ts'
import { VTextField } from '.'

const meta: Meta<typeof VTextField> = {
  title: 'UI/TextField',
  component: VTextField,
  argTypes: {
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: false },
    type: { control: 'select', options: ['text', 'password', 'email', 'tel', 'url'] },
    validator: { control: false },
    variant: { control: 'select', options: eachVariant('solid', 'outlined') },
    modelValue: { control: 'text' },
    valid: { control: 'boolean' }
  },
  args: {
    modelValue: ''
  }
}

export default meta

type Story = StoryObj<typeof VTextField>

export const Solid: Story = { args: { variant: 'solid' } }

export const Outlined: Story = { args: { variant: 'outlined' } }

export const WithIcon: Story = { args: { icon: 'i-ri:search-fill' } }
