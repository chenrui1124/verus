import type { ButtonHTMLAttributes } from 'vue'

import { toPlugin } from '@verus-ui/common'
import Button from './VButton.vue'

export type ButtonProps = {
  text?: string
  icon?: string
  appendIcon?: string
  disabled?: ButtonHTMLAttributes['disabled']
  uppercase?: boolean
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'tonal' | 'outlined' | 'clean'
  danger?: boolean
  loading?: boolean
}

export const VButton = toPlugin(Button)
