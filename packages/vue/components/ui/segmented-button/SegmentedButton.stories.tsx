import type { Meta, StoryObj } from '@storybook/vue3'

import { eachDirection } from '@verus-ui/ts'
import { VSegmentedButton } from '.'

const meta: Meta<typeof VSegmentedButton> = {
  title: 'UI/SegmentedButton',
  component: VSegmentedButton,
  argTypes: {
    direction: { control: 'select', options: eachDirection() },
    each: { control: false },
    uniformWidth: { control: 'boolean' }
  }
}

export default meta

type Story = StoryObj<typeof VSegmentedButton>

export const Default: Story = { args: { each: ['Linux', 'MacOS', 'Windows'] } }

export const WithIcon: Story = {
  args: {
    each: [
      { label: 'Android', icon: 'i-ri:android-fill', value: 'android' },
      { label: 'iOS', icon: 'i-ri:apple-fill', value: 'ios' },
      { label: 'Windows Phone', icon: 'i-ri:windows-fill', value: 'windows-phone' }
    ]
  }
}
