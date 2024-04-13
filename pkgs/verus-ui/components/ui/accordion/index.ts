import { toPlugin } from '@verus-ui/common'
import Accordion from './VAccordion.vue'

export type AccordionProps = {
  init?: boolean
  icon?: string
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
