import type { Variant } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import FloatButton from './FloatButton.vue'

export interface FloatButtonProps {
  icon: string
  absolute?: boolean
  disabled?: boolean
  /**
   * @default 'tonal'
   */
  variant?: Variant<'solid' | 'tonal'>
  right?: string
  bottom?: string
}

export const VFloatButton = useInstall(
  FloatButton as unknown as new () => {
    $props: FloatButtonProps
    $emit: (name: 'click', payload?: MouseEvent) => void
  }
)
