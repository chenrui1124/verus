import type { PropType } from 'vue'

type TooltipProps = {
  content: string
  /**
   * @default 'top'
   */
  position?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * @default ['hover']
   */
  trigger?: ['hover', 'focus', 'focus-visible', 'invalid']
  danger?: boolean
}

function Tooltip({ content, position, trigger, danger }: TooltipProps) {
  return (
    <div
      class={[
        'pointer-events-none absolute whitespace-nowrap rounded-v1 px-4 py-1.5 text-sm opacity-0 transition duration-300 before:absolute before:size-2 before:rotate-45 before:bg-inherit group-has-[:disabled]/v-tooltip:hidden',
        !danger ? 'bg-on-bsc text-bsc' : 'bg-err text-on-err',
        {
          'group-hover/v-tooltip:opacity-100': trigger?.includes('hover'),
          'group-focus/v-tooltip:opacity-100': trigger?.includes('focus'),
          'group-focus-visible/v-tooltip:opacity-100': trigger?.includes('focus-visible'),
          'group-invalid/v-tooltip:opacity-100': trigger?.includes('invalid'),
          'bottom-full left-1/2 mb-2 -translate-x-1/2 before:left-1/2 before:top-full before:-translate-x-1/2 before:-translate-y-1/2':
            position === 'top',
          'left-full top-1/2 mr-2 -translate-y-1/2 before:right-full before:top-1/2 before:-translate-y-1/2 before:translate-x-1/2':
            position === 'right',
          'left-1/2 top-full mt-2 -translate-x-1/2 before:bottom-full before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2':
            position === 'bottom',
          'right-full top-1/2 ml-2 -translate-y-1/2 before:left-full before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2':
            position === 'left'
        }
      ]}>
      {content}
    </div>
  )
}

Tooltip.props = {
  content: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<TooltipProps['position']>,
    default: 'top'
  },
  trigger: {
    type: Object as PropType<TooltipProps['trigger']>,
    default: () => ['hover']
  },
  danger: Boolean
}

export type TooltipOptions = string | TooltipProps

export default Tooltip
