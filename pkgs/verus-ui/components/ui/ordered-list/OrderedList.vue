<script setup lang="ts">
import type { VNode } from 'vue'
import type { OrderedListProps } from '.'

defineProps<OrderedListProps>()

const slots = defineSlots<{ default(): any }>()

function DefaultSlot() {
  if (slots.default?.()) {
    const defaultSlots = slots.default() as VNode[]

    for (const node of defaultSlots) {
      if (typeof node.children == 'string') {
        node.children = node.children.trim()
      }
    }

    return defaultSlots
  }
}
</script>

<template>
  <ol
    :style="{ width }"
    :class="[
      $style['v-list'],
      'm-0 ml-8 list-none space-y-3 p-0 text-sm/7 text-on-bsc',
      '*:before:-ml-8 *:before:mr-3 *:before:inline-block *:before:h-7 *:before:w-5 *:before:rounded-full *:before:bg-on-bsc *:before:text-center *:before:text-xs/7 *:before:font-semibold *:before:text-bsc',
      '[counter-reset]-[item]'
    ]"
  >
    <DefaultSlot />
  </ol>
</template>

<style module>
.v-list {
  counter-reset: marker;
}

.v-list > * {
  counter-increment: marker;
}

.v-list > *::before {
  content: counter(marker) ' ';
}
</style>
