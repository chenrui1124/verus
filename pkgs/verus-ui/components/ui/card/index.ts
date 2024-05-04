import type { Variant } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import Card from './Card'

export interface CardProps {
  /**
   * img src
   */
  image?: string
  title?: string
  subtitle?: string
  /**
   * @default 'solid'
   */
  variant?: Variant<'solid' | 'outlined'>
  danger?: boolean
  /**
   * @default '16rem'
   */
  width?: string
}

export interface CardSlots {
  default: void
}

export const VCard = useInstall(
  Card as unknown as new () => {
    $props: CardProps
    $slots: CardSlots
  }
)
