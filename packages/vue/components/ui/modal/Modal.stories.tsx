import type { Meta, StoryObj } from '@storybook/vue3'
import type { ModalSlots } from '.'

import { VButton } from '@verus-ui/components'
import { VModal } from '.'

const meta: Meta<typeof VModal> = {
  title: 'UI/Modal',
  component: VModal,
  argTypes: {
    width: { control: 'text' }
  },
  render: args => {
    return () => (
      <VModal
        {...args}
        v-slots={
          {
            trigger: ({ open }) => (
              <VButton textTransform='uppercase' onClick={open}>
                open
              </VButton>
            ),
            default: ({ close }) => (
              <VButton textTransform='uppercase' onClick={close}>
                close
              </VButton>
            )
          } satisfies ModalSlots
        }
      />
    )
  }
}

export default meta

type Story = StoryObj<typeof VModal>

export const Default: Story = {}
