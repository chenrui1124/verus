import type { HTMLAttributes } from 'vue'

import { toPlugin } from '@verus-ui/common'
import Tag from './Tag'

export type TagProps = {
  icon?: string
  status?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  style?: HTMLAttributes['style']
  class?: HTMLAttributes['class']
}

export const VTag = toPlugin(Tag)
