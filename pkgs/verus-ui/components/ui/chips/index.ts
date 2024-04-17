import type { OrReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import Chips from './Chips.vue'

export type ChipsProps = {
  each: OrReadonly<(string | { icon?: string; text: string; value: string })[]>
  selectable?: boolean
}

export type ChipsModel = {
  modelValue: string[]
}

export const VChips = toPlugin(Chips)
