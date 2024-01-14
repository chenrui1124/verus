<script setup lang="ts">
import type { AutoGridProps } from '.'

defineOptions({ name: 'AutoGrid' })

const { gap = 'md', width = 'auto' } = defineProps<AutoGridProps>()

defineSlots<{ default(props: {}): any }>()
</script>

<template>
  <div
    :style="{
      width,
      gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth}, 1fr))`
    }"
    :class="[
      'grid',
      {
        'gap-2': gap === 'sm',
        'gap-4': gap === 'md',
        'gap-6': gap === 'lg'
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
