<script setup lang="ts">
import type { CardProps } from '.'

defineOptions({ name: 'Card' })

const { width = '16rem', variant = 'outlined', danger } = defineProps<CardProps>()

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width }"
    :data-danger="danger ? '' : void 0"
    class="relative flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300 *:duration-inherit"
    :class="{
      'bg-pri-ctr data-[danger]:bg-err-ctr': variant === 'solid',
      'bg-bsc before:v-shade before:border-pri before:v-border data-[danger]:before:border-err':
        variant === 'outlined'
    }"
  >
    <!--* Image *-->
    <img v-if="image" :src="image" class="-mx-6 -mt-6 rounded-t-inherit" />

    <!--* Title *-->
    <div
      v-if="title"
      :data-danger="danger ? '' : void 0"
      class="text-2xl text-pri data-[danger]:text-err"
      :class="image && '-mr-1'"
    >
      {{ title }}
    </div>
    <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">
      {{ subtitle }}
    </div>

    <!--* Content *-->
    <div class="text-sm leading-6 text-on-bsc">
      <slot />
    </div>
  </div>
</template>
