<script setup lang="ts">
import type { VNode } from 'vue'
import type { OrderedListProps, OrderedListSlots } from '.'

import { withPrefix } from '@verus-ui/common'
import { Marker } from '@verus-ui/ts'

defineOptions({ name: withPrefix('OrderedList') })

const { marker = Marker.Arabic } = defineProps<OrderedListProps>()

const slots = defineSlots<OrderedListSlots>()

if (slots.default) {
  for (const node of slots.default() as VNode[]) {
    if (typeof node.children == 'string') {
      node.children = node.children.trim()
    }
  }
}
</script>

<template>
  <ol
    data-name="OrderedList"
    :style="{ width }"
    :class="[
      'm-0 ml-10 list-none space-y-4 p-0 text-sm/6 text-on-bsc',
      '*:mt-1 *:transition-colors *:duration-300',
      '*:before:-my-1 *:before:-ml-9 *:before:mr-3 *:before:inline-block *:before:size-6 *:before:rounded-full *:before:bg-on-bsc *:before:py-1 *:before:text-center *:before:text-sm/6 *:before:text-bsc *:before:transition-colors *:before:duration-300',
      marker === Marker.Roman
        ? '*:before:content-[counter(marker,upper-roman)]'
        : '*:before:content-[counter(marker)]'
    ]"
  >
    <slot></slot>
    <!-- <component :is="slots.default" /> -->
  </ol>
</template>

<style>
[data-name='OrderedList'] {
  counter-reset: marker;

  & > * {
    counter-increment: marker;
  }
}
</style>
