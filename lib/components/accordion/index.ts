import type { PureCSSIconClass } from 'mm3'

import { toPlugin } from '@utils'
import Accordion from './VAccordion.vue'

export type AccordionProps = {
  init?: boolean
  icon?: PureCSSIconClass
  title?: string
  width?: string
}

export const VAccordion = toPlugin(Accordion)
