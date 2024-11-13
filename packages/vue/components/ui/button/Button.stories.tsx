import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { eachFontWeight, eachTextTransform, eachVariant } from '@verus-ui/ts'
import { VButton } from '.'

const meta: Meta<typeof VButton> = {
  title: 'UI/Button',
  component: VButton,
  argTypes: {
    appendIcon: { control: 'text' },
    block: { control: 'boolean' },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fontWeight: { control: 'select', options: eachFontWeight() },
    icon: { control: 'text' },
    label: { control: 'text' },
    loading: { control: 'boolean' },
    textTransform: { control: 'select', options: eachTextTransform() },
    variant: { control: 'select', options: eachVariant() }
  },
  args: {
    label: 'Button',
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof VButton>

export const Solid: Story = { args: { variant: 'solid' } }

export const Tonal: Story = { args: { variant: 'tonal' } }

export const Outlined: Story = { args: { variant: 'outlined' } }

export const Clean: Story = { args: { variant: 'clean' } }

export const WithIcon: Story = { args: { icon: 'i-ri:add-fill' } }
