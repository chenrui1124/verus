import type { InputHTMLAttributes } from 'vue'
import type { VerusProps } from '@verus-ui/types'

import { toPlugin } from '@verus-ui/common'
import TextField from './TextField.vue'

export const EACH_TYPE = ['text', 'password', 'email', 'tel', 'url'] as const

export type TextFieldProps = {
  autocomplete?: InputHTMLAttributes['autocomplete']
  disabled?: boolean
  pattern?: InputHTMLAttributes['pattern']
  placeholder?: string
  type?: (typeof EACH_TYPE)[number]
  icon?: string
  clearable?: boolean
  /**
   * @default 'outlined'
   */
  variant?: VerusProps.Variant<'solid' | 'outlined'>
  validator?: (modelValue: string | undefined) => boolean
}

export type TextFieldModel = {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const VTextField = toPlugin(TextField)
