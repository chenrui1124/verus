import type { HTMLAttributes } from 'vue'

import { useInstall } from '@verus-ui/common'
import Tag from './Tag'

export interface TagProps extends Pick<HTMLAttributes, 'style' | 'class'> {
  icon?: string
  /**
   * @default 'default'
   */
  status?: 'default' | 'primary' | 'success' | 'warning' | 'error'
}

export interface TagSlots {
  default(): void
}

export const VTag = useInstall(
  Tag as unknown as new () => {
    $props: TagProps
    $slots: TagSlots
  }
)
