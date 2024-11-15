<script lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn, withPrefix } from '@verus-ui/common'
import { useAttrs } from 'vue'

export interface AutoGridProps {
  /**
   * @default '1rem'
   */
  gap?: string
  itemWidth?: string
  width?: string
}

export interface AutoGridSlots {
  default(props?: {}): any
}
</script>

<script lang="ts" setup>
defineOptions({ inheritAttrs: false, name: withPrefix('AutoGrid') })

const { itemWidth, gap = '1rem' } = defineProps<AutoGridProps>()

defineSlots<AutoGridSlots>()

const { class: className, href, ...othersAttrs } = useAttrs()
</script>

<template>
  <div
    :="othersAttrs"
    :style="{
      gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth}, 1fr))`,
      width
    }"
    :class="cn('grid items-center justify-items-center', className as HTMLAttributes['class'])"
  >
    <slot></slot>
  </div>
</template>
