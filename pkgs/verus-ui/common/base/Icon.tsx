import type { PropType } from 'vue'

type BaseIconProps = {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function BaseIcon({ name, size }: BaseIconProps) {
  return (
    <span
      class={[
        name,
        'pointer-events-none inline-block',
        {
          sm: 'min-h-4 min-w-4',
          md: 'min-h-5 min-w-5',
          lg: 'min-h-6 min-w-6',
          xl: 'min-h-7 min-w-7'
        }[size!]
      ]}
    />
  )
}

BaseIcon.props = {
  name: String,
  size: {
    type: String as PropType<BaseIconProps['size']>,
    default: 'md'
  }
}

export default BaseIcon
