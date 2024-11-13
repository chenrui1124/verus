import type { Meta, StoryObj } from '@storybook/vue3'

import { VRadios } from '.'

const meta: Meta<typeof VRadios> = {
  title: 'UI/Radios',
  component: VRadios,
  argTypes: {
    each: { control: false },
    width: { control: 'text' }
  },
  args: {
    width: '24rem'
  }
}

export default meta

type Story = StoryObj<typeof VRadios>

export const Default: Story = {
  args: {
    each: ['Windows', 'Linux', 'MacOS']
  }
}

export const WithIcon: Story = {
  args: {
    each: [
      { label: 'Android', icon: 'i-ri:android-fill', value: 'android' },
      { label: 'iOS', icon: 'i-ri:apple-fill', value: 'ios' },
      { label: 'Windows Phone', icon: 'i-ri:windows-fill', value: 'windows-phone' }
    ]
  }
}
