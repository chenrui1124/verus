import type { Status, Variant } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import Accordion from './Accordion'

export interface AccordionProps {
  init?: boolean
  icon?: string
  title?: string
  width?: string
  /**
   * @default 'normal'
   */
  status?: Status<'normal' | 'error'>
  /**
   * @default 'solid'
   */
  variant?: Variant<'solid' | 'outlined'>
}

export interface AccordionSlots {
  default: void
}

export const VAccordion = useInstall(
  Accordion as unknown as new () => {
    $props: AccordionProps
    $slots: AccordionSlots
  }
)
