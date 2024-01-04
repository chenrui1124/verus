import { toPlugin } from '@utils'
import Iterate from './VIterate.vue'

export type IterateProps<T> = {
  each: T[] | readonly T[]
  init?: number
}

export const VIterate = toPlugin(Iterate)
