import type { InputHTMLAttributes } from 'vue'
import type { TooltipOptions } from '@base'

import { toPlugin } from '@utils'
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
  tooltip?: TooltipOptions
}

export type TextFieldModel = {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const VTextField = toPlugin(TextField)
