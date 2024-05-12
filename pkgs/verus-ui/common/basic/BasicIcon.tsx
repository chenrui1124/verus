import type { FunctionalComponent, HTMLAttributes, PropType } from 'vue'

import { twMerge } from 'tailwind-merge'

interface BasicIconProps extends HTMLAttributes {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const BasicIcon: FunctionalComponent<BasicIconProps> = ({ name, size }, { attrs }) => {
  const { class: className, ...others } = attrs

  return (
    <span
      {...others}
      class={twMerge(
        name,
        'pointer-events-none inline-block',
        {
          sm: 'min-h-4 min-w-4',
          md: 'min-h-5 min-w-5',
          lg: 'min-h-6 min-w-6',
          xl: 'min-h-7 min-w-7'
        }[size!],
        className as HTMLAttributes['class']
      )}
    />
  )
}

BasicIcon.props = {
  name: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<BasicIconProps['size']>,
    default: 'md'
  }
}

BasicIcon.inheritAttrs = false

export default BasicIcon
