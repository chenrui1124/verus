import type { Meta, StoryObj } from '@storybook/vue3'

import { Marker } from '@verus-ui/ts'
import { VOrderedList } from '.'

const meta: Meta<typeof VOrderedList> = {
  title: 'UI/OrderedList',
  component: VOrderedList,
  argTypes: {},
  render(args) {
    return () => (
      <VOrderedList {...args}>
        <li>Lorem ipsum dolor sit.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, optio aut provident non
          corporis nobis asperiores sunt nemo reprehenderit pariatur!
        </li>
        <li>Lorem ipsum dolor sit.</li>
      </VOrderedList>
    )
  }
}

export default meta

type Story = StoryObj<typeof VOrderedList>

export const Arabic: Story = { args: { marker: Marker.Arabic } }

export const Roman: Story = { args: { marker: Marker.Roman } }
