import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import FloatButton from './VFloatButton.vue'
import type { ButtonHTMLAttributes } from 'vue'

export type FloatButtonProps = {
  icon?: string
  absolute?: boolean
  disabled?: ButtonHTMLAttributes['disabled']
  /**
   * @default 'tonal'
   */
  variant?: 'solid' | 'tonal'
  tooltip?: TooltipOptions
}

export const VFloatButton = toPlugin(FloatButton)
