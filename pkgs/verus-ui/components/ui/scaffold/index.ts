import { useInstall } from '@verus-ui/common'
import Scaffold from './Scaffold.vue'

export interface ScaffoldProps {
  resizable?: boolean
}

export type ScaffoldSlots = {
  header(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
  sidebar(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
  default(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
}

export const VScaffold = useInstall(
  Scaffold as unknown as new () => {
    $props: ScaffoldProps
    $slots: ScaffoldSlots
  }
)
