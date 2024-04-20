<script setup lang="ts">
import type { CardProps } from '.'

import { htmlAttribute } from '@verus-ui/common'

const { width = '16rem', variant = 'outlined', danger } = defineProps<CardProps>()

defineSlots<{ default(): any }>()
</script>

<template>
  <div
    :style="{ width }"
    :data-danger="htmlAttribute(danger)"
    :class="[
      'group/v-card relative flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300 *:duration-inherit',
      variant === 'solid'
        ? 'bg-pri-ctr data-[danger]:bg-err-ctr'
        : 'bg-bsc before:v-shade before:border-v1 before:border-solid before:border-pri data-[danger]:before:border-err'
    ]"
  >
    <component :is="image && 'img'" :src="image" class="-mx-6 -mt-6 rounded-t-inherit" />

    <component
      :is="title && 'div'"
      :class="['text-2xl text-pri group-data-[danger]/v-card:text-err', image && '-mt-1']"
    >
      {{ title }}
    </component>

    <component :is="subtitle && 'div'" class="-mt-2 pl-px text-sm text-otl">
      {{ subtitle }}
    </component>

    <div class="text-sm/6 text-on-bsc">
      <slot />
    </div>
  </div>
</template>
