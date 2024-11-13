import type { Meta, StoryObj } from '@storybook/vue3'
import type { VariantProp } from '@verus-ui/ts'

import { eachVariant } from '@verus-ui/ts'
import { VButton } from '@verus-ui/components'
import { VIterate } from '.'

const meta: Meta<typeof VIterate> = {
  title: 'No Render/Iterate',
  component: VIterate as any,
  argTypes: {
    each: { control: false },
    init: { control: 'number' }
  },
  render(args) {
    return () => (
      <VIterate
        {...args}
        v-slots={{
          default: ({ item, next }: { item: VariantProp; next: () => void }) => (
            <VButton onClick={next} variant={item}>
              Next
            </VButton>
          )
        }}
      />
    )
  }
}

export default meta

type Story = StoryObj<typeof VIterate>

export const Default: Story = { args: { each: eachVariant(), init: 3 } }
