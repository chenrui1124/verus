import type { Meta, StoryObj } from '@storybook/vue3'

import { eachVariant } from '@verus-ui/ts'
import { VCard } from '.'

const meta: Meta<typeof VCard> = {
  title: 'UI/Card',
  component: VCard,
  argTypes: {
    danger: { control: 'boolean' },
    image: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    variant: { control: 'select', options: eachVariant('solid', 'outlined') },
    width: { control: 'text' }
  },
  args: {
    subtitle: 'Card subtitle',
    title: 'Card'
  },
  render(args) {
    return () => (
      <VCard {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quaerat.
      </VCard>
    )
  }
}

export default meta

type Story = StoryObj<typeof VCard>

export const Solid: Story = { args: { variant: 'solid' } }

export const Outlined: Story = { args: { variant: 'outlined' } }
