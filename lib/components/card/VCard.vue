<script setup lang="ts">
import type { CardProps } from '.'

const { width = '16rem', variant = 'outlined' } = defineProps<CardProps>()

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width }"
    class="relative flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300"
    :class="{
      [!danger ? 'bg-nrm/32' : 'bg-err-ctr/32']: variant === 'solid',
      'bg-bsc before:v-shade before:border before:border-solid': variant === 'outlined',
      [!danger ? 'before:border-pri' : 'before:border-err']: variant === 'outlined'
    }"
  >
    <!--* Image *-->
    <img v-if="image" :src="image" class="-mx-6 -mt-6 rounded-t-inherit" />

    <!--* Title *-->
    <div
      v-if="title"
      class="text-2xl transition-colors duration-300"
      :class="[image && '-mr-1', !danger ? 'text-pri' : 'text-err']"
    >
      {{ title }}
    </div>
    <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl transition-colors duration-300">
      {{ subtitle }}
    </div>

    <!--* Content *-->
    <div class="text-sm leading-6 text-on-bsc transition-colors duration-300">
      <slot />
    </div>
  </div>
</template>
