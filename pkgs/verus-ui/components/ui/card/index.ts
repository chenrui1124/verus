import { toPlugin } from '@verus-ui/common'
import Card from './VCard.vue'

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
  variant?: 'solid' | 'outlined'
  danger?: boolean
}

export const VCard = toPlugin(Card)
