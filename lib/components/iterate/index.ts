import type { AsReadonly } from 'mm3'

import { toPlugin } from '@utils'
import Iterate from './VIterate.vue'

export type IterateProps<T> = {
  each: AsReadonly<T[]>
  init?: number
}

export const VIterate = toPlugin(Iterate)
