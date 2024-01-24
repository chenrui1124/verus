import type { AsReadonly } from 'mm3'

import { toPlugin } from '@utils'
import List from './VList.vue'

export type ListProps = {
  each: AsReadonly<
    (
      | string
      | {
          icon?: string
          text: string
          value: string
          children?: (string | { icon?: string; text: string; value: string })[]
        }
    )[]
  >
}

export const VList = toPlugin(List)
