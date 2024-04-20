<script setup lang="ts">
import type { AccordionProps } from '.'

import { ref } from 'vue'
import { BaseIcon, boolAttr, useVisible } from '@verus-ui/common'

const { width = 'auto', variant = 'outlined', init } = defineProps<AccordionProps>()

const { state, toggle } = useVisible({ model: ref(init) })

defineSlots<{ default(): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateRows: state ? '3.5rem 1fr' : '3rem 0fr' }"
    :data-danger="boolAttr(danger)"
    :class="[
      'group/v-accordion relative inline-grid grid-cols-1 rounded-v2 transition-all duration-500 ease-braking',
      {
        'bg-pri-ctr data-[danger]:bg-err-ctr': variant === 'solid',
        'bg-bsc before:v-shade before:border-v1 before:border-solid before:border-pri before:transition-colors before:duration-inherit before:ease-inherit data-[danger]:before:border-err':
          variant === 'outlined'
      }
    ]"
  >
    <div
      @click="toggle"
      :class="[
        'inline-flex cursor-pointer items-center gap-4 rounded-inherit px-6 text-base text-pri transition-colors duration-300 group-data-[danger]/v-accordion:text-err',
        {
          'hover:bg-pri/8': variant === 'solid',
          'hover:bg-pri-ctr data-[danger]:hover:bg-err-ctr': variant === 'outlined'
        }
      ]"
    >
      <component :is="icon && BaseIcon" :name="icon" class="-ml-1" />
      <span class="pointer-events-none mb-0.5 select-none">{{ title }}</span>
      <BaseIcon
        name="i-[solar--alt-arrow-right-linear]"
        :class="['-mr-1 ml-auto transition duration-300', { 'rotate-90': state }]"
      />
    </div>

    <div
      :class="[
        'overflow-hidden rounded-b-v2 px-6 text-sm/6 transition-all duration-inherit ease-inherit',
        {
          'pb-6 pt-4': state,
          'text-on-pri-var group-data-[danger]/v-accordion:text-on-err-var': variant === 'solid',
          'text-on-bsc': variant === 'outlined'
        }
      ]"
    >
      <slot />
    </div>
  </div>
</template>
