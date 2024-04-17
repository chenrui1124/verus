import { toPlugin } from '@verus-ui/common'
import IconButton from './IconButton.vue'

export type IconButtonProps = {
  icon: string
  disabled?: boolean
  danger?: boolean
}

export const VIconButton = toPlugin(IconButton)
