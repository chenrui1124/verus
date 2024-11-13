import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { eachVariant } from '@verus-ui/ts'
import { VFloatButton } from '.'

const meta: Meta<typeof VFloatButton> = {
  title: 'UI/FloatButton',
  component: VFloatButton,
  argTypes: {
    absolute: { control: 'boolean' },
    bottom: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: false },
    right: { control: 'text' },
    variant: { control: 'inline-radio', options: eachVariant('solid', 'tonal') }
  },
  args: {
    icon: 'i-ri:add-fill',
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof VFloatButton>

export const Solid: Story = { args: { variant: 'solid' } }

export const Tonal: Story = { args: { variant: 'tonal' } }
