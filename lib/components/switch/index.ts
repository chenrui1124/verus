import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import Switch from './VSwitch.vue'

export type SwitchProps = {
  disabled?: boolean
  tooltip?: TooltipOptions
}

export type SwitchModel = {
  modelValue: boolean | undefined
}

export const VSwitch = toPlugin(Switch)
