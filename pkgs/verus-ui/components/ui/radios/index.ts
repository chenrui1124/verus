import type { OrReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import Radios from './Radios.vue'

export type RadiosProps = {
  each: OrReadonly<(string | { icon?: string; text: string; value: string })[]>
  width?: string
}

export type RadiosModel = {
  modelValue: string | undefined
}

export const VRadios = toPlugin(Radios)
