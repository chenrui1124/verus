import type { OrReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import Radios from './Radios.vue'

export type RadiosProps = {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  width?: string
  compact?: boolean
}

export type RadiosModel = {
  modelValue: string | undefined
}

export const VRadios = toPlugin(Radios)
