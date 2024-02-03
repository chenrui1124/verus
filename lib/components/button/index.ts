import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import Button from './VButton.vue'

export type ButtonProps = {
  text?: string
  icon?: string
  appendIcon?: string
  disabled?: boolean
  uppercase?: boolean
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'tonal' | 'outlined' | 'clean'
  danger?: boolean
  loading?: boolean
  tooltip?: TooltipOptions
}

export const VButton = toPlugin(Button)
