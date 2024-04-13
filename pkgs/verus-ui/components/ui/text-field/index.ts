import type { InputHTMLAttributes } from 'vue'

import { toPlugin } from '@verus-ui/common'
import TextField from './VTextField.vue'

export type TextFieldProps = {
  autocomplete?: InputHTMLAttributes['autocomplete']
  disabled?: InputHTMLAttributes['disabled']
  pattern?: InputHTMLAttributes['pattern']
  placeholder?: string
  icon?: string
  secret?: boolean
  clearable?: boolean
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'outlined'
  validator?: (modelValue: string | undefined) => boolean
}

export type TextFieldModel = {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const VTextField = toPlugin(TextField)
