import type { FunctionalComponent, HTMLAttributes, PropType } from 'vue'

import { twMerge } from 'tailwind-merge'

type BaseIconProps = {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
} & {
  style?: HTMLAttributes['style']
  class?: HTMLAttributes['class']
}

const BaseIcon: FunctionalComponent<BaseIconProps> = ({ name, size }, { attrs }) => {
  const { class: className, ...others } = attrs

  return (
    <span
      {...others}
      class={twMerge(
        name,
        'pointer-events-none inline-block',
        // size === 'sm'
        'min-h-4 min-w-4',
        {
          sm: '',
          md: 'min-h-5 min-w-5',
          lg: 'min-h-6 min-w-6',
          xl: 'min-h-7 min-w-7'
        }[size!],
        className as HTMLAttributes['class']
      )}
    />
  )
}

BaseIcon.props = {
  name: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<BaseIconProps['size']>,
    default: 'md'
  }
}

BaseIcon.inheritAttrs = false

export default BaseIcon
