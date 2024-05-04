import type { OrReadonly } from 'mm3'

import { useInstall } from '@verus-ui/common'
import Chips from './Chips.vue'

export interface ChipsProps {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  selectable?: boolean
}

export interface ChipsModel {
  modelValue: string[] | undefined
}

export const VChips = useInstall(
  Chips as unknown as new () => {
    $props: ChipsProps & ChipsModel
    $emit: (name: 'update:modelValue', modelValue: ChipsModel['modelValue']) => void
  }
)
