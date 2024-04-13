import type { AsReadonly } from 'mm3'

import { toPlugin } from '@verus-ui/common'
import Radios from './VRadios.vue'

export type RadiosProps = {
  each: AsReadonly<(string | { icon?: string; text: string; value: string })[]>
  width?: string
}

export type RadiosModel = {
  modelValue: string | undefined
}

export const VRadios = toPlugin(Radios)
