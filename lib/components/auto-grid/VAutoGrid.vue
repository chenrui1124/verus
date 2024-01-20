<script setup lang="ts">
import type { AutoGridProps } from '.'

defineOptions({ name: 'AutoGrid' })

const { gap = 'md', width = 'auto' } = defineProps<AutoGridProps>()

defineSlots<{ default(props: {}): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth}, 1fr))` }"
    :class="['grid', { sm: 'gap-2', md: 'gap-4', lg: 'gap-6' }[gap]]"
  >
    <slot></slot>
  </div>
</template>
