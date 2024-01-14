import type { PureCSSIconClassName } from 'mm3'
import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import IconButton from './VIconButton.vue'

export type IconButtonProps = {
  icon: PureCSSIconClassName
  disabled?: boolean
  danger?: boolean
  tooltip?: TooltipOptions
}

export const VIconButton = toPlugin(IconButton)
