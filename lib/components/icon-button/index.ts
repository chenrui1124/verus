import type { PureCSSIconClassName } from 'mm3'

import { toPlugin } from '@utils'
import IconButton from './VIconButton.vue'

export type IconButtonProps = {
  icon: PureCSSIconClassName
  disabled?: boolean
  danger?: boolean
}

export const VIconButton = toPlugin(IconButton)
