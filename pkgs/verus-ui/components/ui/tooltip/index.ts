import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Tooltip from './Tooltip'

export type TooltipProps = {
  text: string
  position: VerusProps.Position
}

export const VTooltip = toPlugin(Tooltip)
