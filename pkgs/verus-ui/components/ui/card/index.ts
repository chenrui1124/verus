import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Card from './Card.vue'

export type CardProps = {
  /**
   * @default '16rem'
   */
  width?: string
  /**
   * img src
   */
  image?: string
  title?: string
  subtitle?: string
  /**
   * @default 'outlined'
   */
  variant?: VerusProps.Variant<'solid' | 'outlined'>
  danger?: boolean
}

export const VCard = toPlugin(Card)
