<script setup lang="ts">
import type { VNode } from 'vue'
import type { OrderedListProps } from '.'

const { marker = 'arabic' } = defineProps<OrderedListProps>()

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
      'm-0 ml-10 list-none space-y-4 p-0 text-sm/6 text-on-bsc',
      '*:mt-1 *:transition-colors *:duration-300',
      '*:before:-my-1 *:before:-ml-9 *:before:mr-3 *:before:inline-block *:before:size-6 *:before:rounded-full *:before:bg-on-bsc *:before:py-1 *:before:text-center *:before:text-xs/6 *:before:text-bsc *:before:transition-colors *:before:duration-300',
      marker === 'roman'
        ? '*:before:content-[counter(marker,upper-roman)]'
        : '*:before:font-semibold *:before:content-[counter(marker)]'
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
</style>
