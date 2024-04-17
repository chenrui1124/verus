import type { AnchorHTMLAttributes } from 'vue'
import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Button from './Button.vue'

export type ButtonProps = {
  text?: string
  icon?: string
  appendIcon?: string
  loading?: boolean
  /**
   * @default 'solid'
   */
  variant?: VerusProps.Variant
  danger?: boolean
  uppercase?: boolean
  disabled?: boolean
  href?: AnchorHTMLAttributes['href']
  target?: AnchorHTMLAttributes['target']
}

export const VButton = toPlugin(Button)
