import type { AsReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import Chips from './VChips.vue'

export type ChipsProps = {
  each: AsReadonly<(string | { icon?: string; text: string; value: string })[]>
  selectable?: boolean
}

export type ChipsModel = {
  modelValue: string[]
}

export const VChips = toPlugin(Chips)
