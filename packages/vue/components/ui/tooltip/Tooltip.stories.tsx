import type { Meta, StoryObj } from '@storybook/vue3'

import { eachPosition } from '@verus-ui/ts'
import { VIconButton } from '@verus-ui/components'
import { VTooltip } from '.'

const meta: Meta<typeof VTooltip> = {
  title: 'UI/Tooltip',
  component: VTooltip as any,
  argTypes: {
    label: { control: { type: 'text' } },
    position: { control: { type: 'select', options: eachPosition() } }
  },
  args: {
    label: 'Search',
    position: 'top'
  },
  render(args) {
    return () => (
      <VTooltip {...args}>
        <VIconButton icon='i-ri:search-line' />
      </VTooltip>
    )
  }
}

export default meta

type Story = StoryObj<typeof VTooltip>

export const Top: Story = {}

export const Right: Story = { args: { position: 'right' } }

export const Bottom: Story = { args: { position: 'bottom' } }

export const Left: Story = { args: { position: 'left' } }
