<script lang="ts">
import type { VariantProp } from '@verus-ui/ts'

import { htmlAttribute, withPrefix } from '@verus-ui/common'

export interface CardProps {
  danger?: boolean
  /**
   * img src
   */
  image?: string
  subtitle?: string
  title?: string
  /**
   * @default 'solid'
   */
  variant?: VariantProp<'solid' | 'outlined'>
  /**
   * @default '16rem'
   */
  width?: string
}
</script>

<script lang="ts" setup>
defineOptions({ name: withPrefix('Card') })

defineProps<CardProps>()
</script>
<template>
  <div
    :style="{ width }"
    :data-danger="htmlAttribute(danger)"
    :class="[
      'relative box-border flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300 *:duration-inherit',
      variant === 'solid'
        ? 'bg-pri-ctr'
        : 'bg-bsc before:v-shade before:border-1.2 before:border-solid before:border-pri'
    ]"
  >
    <img v-if="image" :src="image" class="-mx-6 -mt-6 rounded-t-inherit" />
    <div v-if="title" :class="['text-2xl text-pri', image && '-mt-1']">{{ title }}</div>
    <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">{{ subtitle }}</div>
    <div class="text-sm/6 text-on-bsc">
      <slot></slot>
    </div>
  </div>
</template>
