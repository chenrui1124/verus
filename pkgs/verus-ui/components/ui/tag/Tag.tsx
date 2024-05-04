import type { FunctionalComponent, HTMLAttributes } from 'vue'
import type { TagProps, TagSlots } from '.'

import { twMerge } from 'tailwind-merge'
import { BaseIcon, useLiteralsProp, withPrefix } from '@verus-ui/common'

const Tag: FunctionalComponent<TagProps, {}, TagSlots> = ({ icon, status }, { slots, attrs }) => {
  const { class: className, ...others } = attrs

  return (
    <span
      {...others}
      class={twMerge(
        'box-border inline-flex h-7 items-center justify-center gap-2 rounded-v1 px-3 align-middle text-xs/7 transition-colors duration-300',
        // default
        'bg-bsc-var text-on-bsc',
        {
          default: '',
          primary: 'bg-pri-ctr text-pri',
          success: 'bg-suc-ctr text-on-suc-ctr',
          warning: 'bg-wan-ctr text-on-wan-ctr',
          error: 'bg-err-ctr text-err'
        }[status!],
        className as HTMLAttributes['class']
      )}
    >
      {icon && <BaseIcon name={icon} size='sm' class='-ml-1' />}
      {slots.default?.()}
    </span>
  )
}

Tag.props = {
  icon: String,
  status: useLiteralsProp<TagProps['status']>({
    default: 'default',
    optional: ['default', 'primary', 'success', 'warning', 'error']
  })
}

Tag.displayName = withPrefix('Tag')

Tag.inheritAttrs = false

export default Tag
