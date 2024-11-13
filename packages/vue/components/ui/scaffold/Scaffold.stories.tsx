import type { Meta, StoryObj } from '@storybook/vue3'
import type { ScaffoldSlots } from '.'

import { VIconButton } from '@verus-ui/components'
import { VScaffold } from '.'

const meta: Meta<typeof VScaffold> = {
  title: '',
  component: VScaffold,
  argTypes: {},
  render(args) {
    return () => (
      <VScaffold
        {...args}
        v-slots={
          {
            header: ({ toggleSidebar }) => (
              <VIconButton onClick={toggleSidebar} icon='i-ri:menu-2-fill' />
            ),
            sidebar: () => 'Lorem ipsum dolor sit',
            default: () => 'Lorem ipsum dolor sit'
          } satisfies ScaffoldSlots
        }
      />
    )
  }
}

export default meta

type Story = StoryObj<typeof VScaffold>

export const Default: Story = {}
