import type { PureCSSIconClassName } from 'mm3'
import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import FloatButton from './VFloatButton.vue'

export type FloatButtonProps = {
  icon?: PureCSSIconClassName
  absolute?: boolean
  disabled?: boolean
  /**
   * @default 'tonal'
   */
  variant?: 'solid' | 'tonal'
  tooltip?: TooltipOptions
}

export const VFloatButton = toPlugin(FloatButton)
