import { toPlugin } from '@verus-ui/common'
import FloatButton from './VFloatButton.vue'

export type FloatButtonProps = {
  icon?: string
  absolute?: boolean
  disabled?: boolean
  /**
   * @default 'tonal'
   */
  variant?: 'solid' | 'tonal'
}

export const VFloatButton = toPlugin(FloatButton)
