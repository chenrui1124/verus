import type { AsReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import SegmentedButton from './VSegmentedButton.vue'

export type SegmentedButtonProps = {
  each: AsReadonly<(string | { icon?: string; text: string; value: string })[]>
  direction?: 'row' | 'col'
}

export type SegmentedButtonModel = {
  modelValue: string
}

export const VSegmentedButton = toPlugin(SegmentedButton)
