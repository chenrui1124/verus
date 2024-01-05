import type { PureCSSIconClassName } from 'mm3'
import Button from './VButton.vue'

export type ButtonProps = {
  text?: string
  icon?: PureCSSIconClassName
  appendIcon?: PureCSSIconClassName
  danger?: boolean
  loading?: boolean
  disabled?: boolean
  uppercase?: boolean
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'tonal' | 'outlined' | 'clean'
}

export const VButton = Button
