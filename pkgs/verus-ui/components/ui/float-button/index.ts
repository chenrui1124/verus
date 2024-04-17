import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import FloatButton from './FloatButton.vue'

export type FloatButtonProps = {
  icon?: string
  absolute?: boolean
  disabled?: boolean
  /**
   * @default 'tonal'
   */
  variant?: VerusProps.Variant<'solid' | 'tonal'>
}

export const VFloatButton = toPlugin(FloatButton)
