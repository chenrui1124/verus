import type { FunctionalComponent } from 'vue'
import type { StatusProp } from '@verus-ui/ts'

import { Status } from '@verus-ui/ts'
import { cn, Icon, withPrefix } from '@verus-ui/common'

export interface AlertProps {
  icon?: string
  title?: string
  status?: StatusProp
}

const Alert: FunctionalComponent<AlertProps> = (
  { icon, status = Status.Default, title },
  { slots }
) => {
  return (
    <div
      class={cn(
        {
          [Status.Default]: 'bg-bsc-var text-on-bsc',
          [Status.Primary]: 'bg-pri-ctr text-pri',
          [Status.Success]: 'bg-suc-ctr text-on-suc-ctr',
          [Status.Warning]: 'bg-wan-ctr text-on-wan-ctr',
          [Status.Error]: 'bg-err-ctr text-on-err-ctr'
        }[status],
        'box-border flex gap-2 rounded-v2 px-5 py-4 transition-colors duration-300'
      )}
    >
      {icon && <Icon name={icon} class='m-[0.1875rem] -ml-1.5' />}

      <div class='flex flex-col gap-2'>
        {title && <div class='text-base font-semibold'>{title}</div>}
        <div class='text-sm/6'>{slots.default?.()}</div>
      </div>
    </div>
  )
}

Alert.displayName = withPrefix('Alert')

export default Alert
