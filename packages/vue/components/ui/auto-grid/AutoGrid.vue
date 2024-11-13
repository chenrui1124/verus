<script lang="ts">
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
const { itemWidth, gap = '1rem' } = defineProps<AutoGridProps>()

defineSlots<AutoGridSlots>()
</script>

<template>
  <div
    :style="{
      gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth}, 1fr))`,
      width
    }"
    class="grid items-center justify-items-center"
  >
    <slot></slot>
  </div>
</template>
