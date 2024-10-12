import { useInstall } from '@verus-ui/common'
import Switch from './Switch.vue'

export interface SwitchProps {
  disabled?: boolean
}

export interface SwitchModel {
  modelValue?: boolean | undefined
}

export const VSwitch = useInstall(
  Switch as unknown as new () => {
    $props: SwitchProps & SwitchModel
    $emit: {
      (name: 'change', newValue: SwitchModel['modelValue']): void
      (name: 'update:modelValue', modelValue: SwitchModel['modelValue']): void
    }
  }
)
