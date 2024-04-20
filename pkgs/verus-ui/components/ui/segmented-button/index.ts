import type { OrReadonly } from 'mm3'
import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import SegmentedButton from './SegmentedButton.vue'

export type SegmentedButtonProps = {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  direction?: VerusProps.Direction
}

export type SegmentedButtonModel = {
  modelValue: string
}

export const VSegmentedButton = toPlugin(SegmentedButton)
