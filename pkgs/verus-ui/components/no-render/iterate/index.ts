import type { OrReadonly } from 'mm3'

import { useInstall } from '@verus-ui/common'
import Iterate from './Iterate.vue'

export type IterateProps<T> = {
  each: OrReadonly<T[]>
  init?: number
}

export const VIterate = useInstall(Iterate)
