import type { ButtonHTMLAttributes } from 'vue'

import { toPlugin } from '@utils'
import IconButton from './VIconButton.vue'

export type IconButtonProps = {
  icon: string
  disabled?: ButtonHTMLAttributes['disabled']
  danger?: boolean
}

export const VIconButton = toPlugin(IconButton)
