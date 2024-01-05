import type { PureCSSIconClass } from 'mm3'

import { toPlugin } from '@utils'
import IconButton from './VIconButton.vue'

export type IconButtonProps = {
  icon: PureCSSIconClass
  disabled?: boolean
  danger?: boolean
}

export const VIconButton = toPlugin(IconButton)
