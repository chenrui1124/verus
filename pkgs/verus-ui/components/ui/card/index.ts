import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Card from './Card.vue'

export type CardProps = {
  /**
   * img src
   */
  image?: string
  title?: string
  subtitle?: string
  /**
   * @default 'solid'
   */
  variant?: VerusProps.Variant<'solid' | 'outlined'>
  danger?: boolean
  ui?: {
    /**
     * @default '16rem'
     */
    width?: string
  }
}

export const VCard = toPlugin(Card)
