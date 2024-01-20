import type { PropType } from 'vue'

type IconProps = {
  icon: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function Icon({ icon, size }: IconProps) {
  return (
    <span
      class={[
        icon,
        'pointer-events-none inline-block duration-inherit ease-inherit',
        {
          'min-h-4 min-w-4': size === 'sm',
          'min-h-5 min-w-5': size === 'md',
          'min-h-6 min-w-6': size === 'lg',
          'min-h-7 min-w-7': size === 'xl'
        }
      ]}
    />
  )
}

Icon.props = {
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<IconProps['size']>,
    default: 'md'
  }
}

export default Icon
