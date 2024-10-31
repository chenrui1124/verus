import type { VariantProp } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import Accordion from './Accordion'

export interface AccordionProps {
  init?: boolean
  icon?: string
  title?: string
  danger?: boolean
  /**
   * @default 'solid'
   */
  variant?: VariantProp<'solid' | 'outlined'>
  width?: string
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
