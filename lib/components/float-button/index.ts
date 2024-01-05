import type { PureCSSIconClass } from 'mm3'

import { toPlugin } from '@utils'
import FloatButton from './VFloatButton.vue'

export type FloatButtonProps = {
  icon?: PureCSSIconClass
  absolute?: boolean
  disabled?: boolean
  /**
   * @default 'tonal'
   */
  variant?: 'solid' | 'tonal'
}

export const VFloatButton = toPlugin(FloatButton)
