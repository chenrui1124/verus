<script setup lang="ts">
import type { AccordionProps } from '.'

import { ref } from 'vue'
import { Icon } from '@base'

defineOptions({ name: 'Accordion' })

const { init, width = 'auto', variant = 'outlined' } = defineProps<AccordionProps>()

const visible = ref(init)

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateRows: visible ? '3.5rem 1fr' : '3rem 0fr' }"
    class="relative grid grid-cols-1 rounded-v2 transition-all duration-500 ease-braking"
    :class="{
      [!danger ? 'bg-pri-ctr' : 'bg-err-ctr']: variant === 'solid',
      'bg-bsc before:v-shade before:transition-colors before:duration-inherit before:ease-inherit before:v-border':
        variant === 'outlined',
      [!danger ? 'before:border-pri' : 'before:border-err']: variant === 'outlined'
    }"
  >
    <!--* Title *-->
    <div
      @click="visible = !visible"
      class="flex cursor-pointer items-center gap-4 rounded-inherit px-6 transition-colors duration-inherit ease-inherit"
      :class="[
        {
          'hover:bg-on-bsc/8': variant === 'solid',
          [!danger ? 'hover:bg-pri-ctr' : 'hover:bg-err-ctr']: variant === 'outlined'
        },
        !danger ? 'text-pri' : 'text-err'
      ]"
    >
      <Icon v-if="icon" :i="icon" class="-ml-0.5" />
      <div class="pointer-events-none select-none text-base duration-inherit ease-inherit">
        {{ title }}
      </div>
      <Icon
        i="i-[solar--alt-arrow-right-linear]"
        class="-mr-1 ml-auto transition"
        :class="{ 'rotate-90': visible }"
      />
    </div>

    <!--* Content *-->
    <div
      class="overflow-hidden rounded-b-v2 px-6 text-sm leading-6 transition-all duration-inherit ease-inherit"
      :class="{
        'pb-6 pt-4': visible,
        [!danger ? 'text-on-pri-var' : 'text-on-err-var']: variant === 'solid',
        'text-on-bsc': variant === 'outlined'
      }"
    >
      <slot />
    </div>
  </div>
</template>
