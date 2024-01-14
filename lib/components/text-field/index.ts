import type { InputHTMLAttributes } from 'vue'
import type { PureCSSIconClassName } from 'mm3'
import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
import TextField from './VTextField.vue'

export type TextFieldProps = {
  autocomplete?: InputHTMLAttributes['autocomplete']
  pattern?: InputHTMLAttributes['pattern']
  placeholder?: string
  disabled?: boolean
  icon?: PureCSSIconClassName
  secret?: boolean
  clearable?: boolean
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'outlined'
  validator?: (modelValue: string | undefined) => boolean
  tooltip?: TooltipOptions
}

export type TextFieldModel = {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const VTextField = toPlugin(TextField)
