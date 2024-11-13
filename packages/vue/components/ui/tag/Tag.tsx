import type { FunctionalComponent, HTMLAttributes } from 'vue'
import type { StatusProp } from '@verus-ui/ts'

import { Status } from '@verus-ui/ts'
import { cn, Icon, withPrefix } from '@verus-ui/common'

export interface TagProps extends Pick<HTMLAttributes, 'style' | 'class'> {
  icon?: string
  label?: string
  /**
   * @default 'default'
   */
  status?: StatusProp
}

const Tag: FunctionalComponent = (
  { icon, label, status = Status.Default, class: cls, style }: TagProps,
  { slots }
) => {
  return (
    <span
      style={style}
      class={cn(
        'box-border inline-flex h-7 items-center justify-center gap-2 rounded-v1 px-3 align-middle text-xs/7 transition-colors duration-300',
        {
          default: 'bg-bsc-var text-on-bsc',
          primary: 'bg-pri-ctr text-pri',
          success: 'bg-suc-ctr text-on-suc-ctr',
          warning: 'bg-wan-ctr text-on-wan-ctr',
          error: 'bg-err-ctr text-on-err-ctr'
        }[status!],
        cls
      )}
    >
      {icon && <Icon name={icon} size='sm' class='-ml-1' />}
      {slots.default?.()! || label}
    </span>
  )
}

Tag.displayName = withPrefix('Tag')

export default Tag
