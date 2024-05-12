import { useInstall } from '@verus-ui/common'
import Scaffold from './Scaffold.vue'

export interface ScaffoldProps {
  resizable?: boolean
}

export const VScaffold = useInstall(Scaffold)
