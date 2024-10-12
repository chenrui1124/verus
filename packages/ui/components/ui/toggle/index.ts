import { useInstall } from '@verus-ui/common'
import Toggle from './Toggle.vue'

export interface ToggleProps {
  icon: string | [iconForFalse: string, iconForTrue: string]
}

export interface ToggleModel {
  modelValue?: boolean | undefined
}

export const VToggle = useInstall(
  Toggle as unknown as new () => {
    $props: ToggleProps & ToggleModel
    $emit: {
      (name: 'change', newValue: ToggleModel['modelValue']): void
      (name: 'update:modelValue', modelValue: ToggleModel['modelValue']): void
    }
  }
)
