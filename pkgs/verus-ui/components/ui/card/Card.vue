<script setup lang="ts">
import type { CardProps } from '.'

import { boolAttr } from '@verus-ui/common'

const { width = '16rem', variant = 'outlined', danger } = defineProps<CardProps>()

defineSlots<{ default(): any }>()
</script>

<template>
  <div
    :style="{ width }"
    :data-danger="boolAttr(danger)"
    :class="[
      'group/v-card relative flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300 *:duration-inherit',
      {
        solid: 'bg-pri-ctr data-[danger]:bg-err-ctr',
        outlined:
          'bg-bsc before:v-shade before:border-v1 before:border-solid before:border-pri data-[danger]:before:border-err'
      }[variant]
    ]"
  >
    <!--* Image *-->
    <img v-if="image" :src="image" class="-mx-6 -mt-6 rounded-t-inherit" />

    <!--* Title *-->
    <div
      v-if="title"
      :class="['text-2xl text-pri group-data-[danger]/v-card:text-err', image && '-mt-1']"
    >
      {{ title }}
    </div>
    <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">
      {{ subtitle }}
    </div>

    <!--* Content *-->
    <div class="text-sm/6 text-on-bsc">
      <slot />
    </div>
  </div>
</template>
