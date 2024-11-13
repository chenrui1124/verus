import type { Meta, StoryObj } from '@storybook/vue3'

import { Icon } from '@verus-ui/common'
import { VAutoGrid } from '.'

const meta: Meta<typeof VAutoGrid> = {
  title: 'UI/AutoGrid',
  component: VAutoGrid,
  argTypes: {
    gap: { control: 'text' },
    itemWidth: { control: 'text' },
    width: { control: 'text' }
  },
  args: {
    gap: '2rem',
    itemWidth: '3rem',
    width: '24rem'
  },
  render(args) {
    return () => (
      <VAutoGrid {...args} class='text-pri'>
        {new Array(12).fill(0).map(() => (
          <Icon name='i-ri:folder-5-fill' size='xl' />
        ))}
      </VAutoGrid>
    )
  }
}

export default meta

type Story = StoryObj<typeof VAutoGrid>

export const Default: Story = {}
