import { toPlugin } from '@verus-ui/common'
import Switch from './VSwitch.vue'

export type SwitchProps = {
  disabled?: boolean
}

export type SwitchModel = {
  modelValue: boolean | undefined
}

export const VSwitch = toPlugin(Switch)
