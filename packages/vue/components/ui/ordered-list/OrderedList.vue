<script lang="ts">
import type { VNode } from 'vue'
import type { MarkerProp } from '@verus-ui/ts'

import { withPrefix } from '@verus-ui/common'
import { Marker } from '@verus-ui/ts'

export interface OrderedListProps {
  marker?: MarkerProp
  width?: string
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('OrderedList') })

const { marker = Marker.Arabic } = defineProps<OrderedListProps>()

const slots = defineSlots<{ default(props?: {}): any }>()

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
      '*:[counter-increment:marker] *:before:-my-1 *:before:-ml-9 *:before:mr-3 *:before:inline-block *:before:size-6 *:before:rounded-full *:before:bg-on-bsc *:before:py-1 *:before:text-center *:before:text-sm/6 *:before:text-bsc *:before:transition-colors *:before:duration-300 data-[name=OrderedList]:[counter-reset:marker]',
      marker === Marker.Roman
        ? '*:before:content-[counter(marker,upper-roman)]'
        : '*:before:content-[counter(marker)]'
    ]"
  >
    <slot></slot>
  </ol>
</template>
