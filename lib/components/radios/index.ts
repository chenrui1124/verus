import type { AsReadonly, PureCSSIconClassName } from 'mm3'

import { toPlugin } from '@utils'
import Radios from './VRadios.vue'

export type RadiosProps = {
  each: AsReadonly<(string | { icon?: PureCSSIconClassName; text: string; value: string })[]>
  width?: string
}

export type RadiosModel = {
  modelValue: string | undefined
}

export const VRadios = toPlugin(Radios)
