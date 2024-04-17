import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import Accordion from './Accordion.vue'

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
  variant?: VerusProps.Variant<'solid' | 'outlined'>
  danger?: boolean
}

export const VAccordion = toPlugin(Accordion)
