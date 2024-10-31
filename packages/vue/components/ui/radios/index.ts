import type { OrReadonly } from 'mm3'

import { useInstall } from '@verus-ui/common'
import Radios from './Radios.vue'

export interface RadiosProps {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  width?: string
  compact?: boolean
}

export interface RadiosModel {
  modelValue?: string
}

export const VRadios = useInstall(
  Radios as unknown as new () => {
    $props: RadiosProps & RadiosModel
    $emit: (name: 'update:modelValue', modelValue: RadiosModel['modelValue']) => void
  }
)
