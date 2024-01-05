import type { PureCSSIconClassName } from 'mm3'

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
}

export const VFloatButton = toPlugin(FloatButton)
