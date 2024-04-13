import { toPlugin } from '@verus-ui/common'
import Tooltip from './VTooltip'

export type TooltipProps = {
  text: string
  direction?: 'top' | 'right' | 'bottom' | 'left'
}

export const VTooltip = toPlugin(Tooltip)
