import { useInstall } from '@verus-ui/common'
import Scaffold from './Scaffold.vue'

export interface ScaffoldSlots {
  sidebar(): any
  default(): any
}

export const VScaffold = useInstall(
  Scaffold as unknown as new () => {
    $slots: ScaffoldSlots
  }
)
