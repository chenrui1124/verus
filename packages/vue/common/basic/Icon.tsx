import type { HTMLAttributes } from 'vue'
import type { SizeProp } from '@verus-ui/ts'

import { Size } from '@verus-ui/ts'
import { cn } from '@verus-ui/common'

interface IconProps extends HTMLAttributes {
  name: string
  size?: SizeProp
}

function Icon({ class: className, name, size = Size.Md }: IconProps) {
  return (
    <span
      class={cn(
        name,
        'pointer-events-none inline-block',
        {
          sm: 'min-h-4 min-w-4',
          md: 'min-h-5 min-w-5',
          lg: 'min-h-6 min-w-6',
          xl: 'min-h-7 min-w-7'
        }[size],
        className as HTMLAttributes['class']
      )}
    />
  )
}

export default Icon
