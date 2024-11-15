<script lang="ts">
import type { PositionProp } from '@verus-ui/ts'

import { Position } from '@verus-ui/ts'

interface TooltipContentProps {
  coord: { top?: `${string}px`; left?: `${string}px` }
  position: PositionProp
}
</script>

<script setup lang="ts">
defineProps<TooltipContentProps>()
</script>

<template>
  <div
    :style="coord"
    :class="[
      'fixed box-border size-0 border-[6px] border-solid border-transparent transition duration-300',
      {
        [Position.Top]: '-mx-[6px] -mt-[12px] border-t-on-bsc',
        [Position.Right]: '-my-[6px] border-r-on-bsc',
        [Position.Bottom]: '-mx-[6px] border-b-on-bsc',
        [Position.Left]: '-my-[6px] -ml-[12px] border-l-on-bsc'
      }[position]
    ]"
  >
    <div
      :class="[
        'pointer-events-none absolute z-30 h-8 text-nowrap rounded-v1 bg-on-bsc px-3 text-sm/8 tracking-wide text-bsc shadow shadow-on-bsc/32 transition duration-300',
        {
          [Position.Top]: 'bottom-[6px] -translate-x-1/2',
          [Position.Right]: 'left-[6px] -translate-y-1/2',
          [Position.Bottom]: 'top-[6px] -translate-x-1/2',
          [Position.Left]: 'right-[6px] -translate-y-1/2'
        }[position]
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
