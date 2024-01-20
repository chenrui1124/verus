<script setup lang="ts">
import type { AccordionProps } from '.'

import { computed, ref } from 'vue'
import { Icon } from '@base'

defineOptions({ name: 'Accordion' })

const { width = 'auto', variant = 'outlined', init, danger } = defineProps<AccordionProps>()

const _danger = computed(() => (danger ? '' : void 0))

const open = ref(init)

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateRows: open ? '3.5rem 1fr' : '3rem 0fr' }"
    :data-danger="_danger"
    class="relative grid grid-cols-1 rounded-v2 transition-all duration-500 ease-braking"
    :class="{
      'bg-pri-ctr data-[danger]:bg-err-ctr': variant === 'solid',
      'bg-bsc before:v-shade before:border-pri before:transition-colors before:duration-inherit before:ease-inherit before:v-border data-[danger]:before:border-err':
        variant === 'outlined'
    }"
  >
    <!--* Title *-->
    <div
      :data-danger="_danger"
      @click="open = !open"
      class="flex cursor-pointer items-center gap-4 rounded-inherit px-6 text-pri transition-colors duration-inherit ease-inherit data-[danger]:text-err"
      :class="{
        'hover:bg-on-bsc/8': variant === 'solid',
        'hover:bg-pri-ctr data-[danger]:hover:bg-err-ctr': variant === 'outlined'
      }"
    >
      <Icon v-if="icon" :icon="icon" class="-ml-1" />

      <div class="pointer-events-none select-none text-base duration-inherit ease-inherit">
        {{ title }}
      </div>

      <Icon
        icon="i-[solar--alt-arrow-right-linear]"
        class="-mr-1 ml-auto transition"
        :class="{ 'rotate-90': open }"
      />
    </div>

    <!--* Content *-->
    <div
      :data-danger="_danger"
      class="overflow-hidden rounded-b-v2 px-6 text-sm leading-6 transition-all duration-inherit ease-inherit"
      :class="{
        'pb-6 pt-4': open,
        'text-on-pri-var data-[danger]:text-on-err-var': variant === 'solid',
        'text-on-bsc': variant === 'outlined'
      }"
    >
      <slot />
    </div>
  </div>
</template>
