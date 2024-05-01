import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Tooltip from './Tooltip'

export type TooltipProps = {
  label: string
  position?: VerusProps.Position
  labelTransform?: VerusProps.TextTransform
}

export const VTooltip = toPlugin(Tooltip)
