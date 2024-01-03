import type { PureCSSIconClass } from 'mm3'
import Button from './VButton.vue'

export type ButtonProps = {
  text?: string
  icon?: PureCSSIconClass
  appendIcon?: PureCSSIconClass
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
