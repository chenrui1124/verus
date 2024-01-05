import type { PropType } from 'vue'
import type { PureCSSIconClassName } from 'mm3'

type IconProps = {
  i: PureCSSIconClassName
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function Icon({ i, size }: IconProps) {
  return (
    <span
      class={[
        i,
        'pointer-events-none inline-block',
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
  i: { type: String, required: true },
  size: { type: String as PropType<IconProps['size']>, default: 'md' }
}

export default Icon
