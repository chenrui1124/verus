import type { Meta, StoryObj } from '@storybook/vue3'

import { VChips } from '.'

const meta: Meta<typeof VChips> = {
  title: 'UI/Chips',
  component: VChips,
  argTypes: {
    each: { control: false },
    selectable: { control: 'boolean' },
    modelValue: { control: 'object' }
  },
  args: {
    modelValue: ['Android']
  }
}

export default meta

type Story = StoryObj<typeof VChips>

export const Default: Story = { args: { each: ['Android', 'iOS', 'Windows'] } }

export const WithIcon: Story = {
  args: {
    each: [
      { label: 'Android', icon: 'i-ri:android-fill', value: 'Android' },
      { label: 'iOS', icon: 'i-ri:apple-fill', value: 'iOS' },
      { label: 'Windows', icon: 'i-ri:windows-fill', value: 'Windows' }
    ]
  }
}
