import type { InputHTMLAttributes } from 'vue'
import type { Variant } from '@verus-ui/ts'

import { useInstall } from '@verus-ui/common'
import TextField from './TextField.vue'

export const EACH_TYPE = ['text', 'password', 'email', 'tel', 'url'] as const

export interface TextFieldProps {
  disabled?: boolean
  type?: (typeof EACH_TYPE)[number]
  icon?: string
  clearable?: boolean
  /**
   * @default 'outlined'
   */
  variant?: Variant<'solid' | 'outlined'>
  validator?: (modelValue: string | undefined) => boolean
}

export interface TextFieldModel {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const VTextField = useInstall(
  TextField as unknown as new () => {
    $props: TextFieldProps &
      TextFieldModel &
      Pick<InputHTMLAttributes, 'autocomplete' | 'pattern' | 'placeholder' | 'autofocus'>
    $emit: {
      (name: 'update:modelValue', modelValue: TextFieldModel['modelValue']): void
      (name: 'update:valid', modelValue: TextFieldModel['valid']): void
      (name: 'submit', payload?: Event): void
    }
  }
)
