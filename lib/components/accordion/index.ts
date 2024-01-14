import type { PureCSSIconClassName } from 'mm3'

import { toPlugin } from '@utils'
import Accordion from './VAccordion.vue'

export type AccordionProps = {
  init?: boolean
  icon?: PureCSSIconClassName
  title?: string
  /**
   * @default 'auto'
   */
  width?: string
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'outlined'
  danger?: boolean
}

export const VAccordion = toPlugin(Accordion)
