import type { OrReadonly } from 'mm3'
import type { Direction } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import SegmentedButton from './SegmentedButton.vue'

export interface SegmentedButtonProps {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  direction?: Direction
  uniformWidth?: boolean
}

export interface SegmentedButtonModel {
  modelValue?: string
}

export const VSegmentedButton = useInstall(
  SegmentedButton as new () => {
    $props: SegmentedButtonProps & SegmentedButtonModel
    $emit: (name: 'update:modelValue', modelValue: SegmentedButtonModel['modelValue']) => void
  }
)
