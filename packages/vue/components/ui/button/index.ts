import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'vue'
import type { Either } from 'mm3'
import type { FontWeightProp, TextTransformProp, VariantProp } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import Button from './Button.vue'

export interface ButtonProps {
  label?: string
  icon?: string
  appendIcon?: string
  loading?: boolean
  /**
   * @default 'tonal'
   */
  variant?: VariantProp
  danger?: boolean
  disabled?: boolean
  block?: boolean
  fontWeight?: FontWeightProp
  textTransform?: TextTransformProp
}

export interface ButtonSlots {
  default: void
}

export const VButton = useInstall(
  Button as unknown as new () => {
    $props: ButtonProps &
      Pick<ButtonHTMLAttributes, 'autofocus'> &
      Either<Pick<AnchorHTMLAttributes, 'href' | 'target'>, Pick<ButtonHTMLAttributes, 'disabled'>>
    $emit: (name: 'click', payload?: MouseEvent) => void
    $slots: ButtonSlots
  }
)
