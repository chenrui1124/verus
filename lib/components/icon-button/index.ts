import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import IconButton from './VIconButton.vue'
import type { ButtonHTMLAttributes } from 'vue'

export type IconButtonProps = {
  icon: string
  disabled?: ButtonHTMLAttributes['disabled']
  danger?: boolean
  tooltip?: TooltipOptions
}

export const VIconButton = toPlugin(IconButton)
