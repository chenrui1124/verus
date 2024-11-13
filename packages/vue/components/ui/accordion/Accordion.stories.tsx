import type { Meta, StoryObj } from '@storybook/vue3'

import { eachVariant } from '@verus-ui/ts'
import { VAccordion } from '.'

const meta: Meta<typeof VAccordion> = {
  title: 'UI/Accordion',
  component: VAccordion,
  argTypes: {
    danger: { control: 'boolean' },
    icon: { control: false },
    init: { control: 'boolean' },
    label: { control: 'text' },
    variant: { control: 'select', options: eachVariant('solid', 'outlined') },
    width: { control: 'text' }
  },
  args: {
    label: 'Accordion',
    variant: 'solid'
  },
  render(args) {
    return () => (
      <VAccordion {...args}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto laborum
        sed eaque maxime autem numquam quibusdam quo quod fugit.
      </VAccordion>
    )
  }
}

export default meta

type Story = StoryObj<typeof VAccordion>

export const Solid: Story = {}

export const Outlined: Story = { args: { variant: 'outlined' } }

export const WithIcon: Story = { args: { icon: 'i-ri:error-warning-fill' } }
