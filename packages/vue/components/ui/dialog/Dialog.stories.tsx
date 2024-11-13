import type { Meta, StoryObj } from '@storybook/vue3'
import type { DialogSlots } from '.'

import { VButton } from '@verus-ui/components'
import { VDialog } from '.'

const meta: Meta<typeof VDialog> = {
  title: 'UI/Dialog',
  component: VDialog,
  argTypes: {},
  args: {
    title: 'Dialog',
    subtitle: 'Lorem ipsum.'
  },
  render(args) {
    return () => (
      <VDialog
        {...args}
        v-slots={
          {
            trigger: ({ open }) => <VButton onClick={open} label='OPEN' />,
            default: () => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, fugiat.',
            actions: ({ close }) => (
              <>
                <VButton variant='solid' onClick={close}>
                  Cancel
                </VButton>
                <VButton variant='tonal' onClick={close}>
                  Confirm
                </VButton>
              </>
            )
          } satisfies DialogSlots
        }
      />
    )
  }
}

export default meta

type Story = StoryObj<typeof VDialog>

export const Default: Story = {}
