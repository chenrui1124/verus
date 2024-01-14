<script setup lang="ts">
import type { AutoGridProps } from '.'

defineOptions({ name: 'AutoGrid' })

const { size = 'md' } = defineProps<AutoGridProps>()

defineSlots<{ default(props: {}): any }>()
</script>

<template>
  <div
    :style="{ gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))` }"
    :class="[
      'grid',
      {
        'gap-2': size === 'sm',
        'gap-4': size === 'md',
        'gap-6': size === 'lg'
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
