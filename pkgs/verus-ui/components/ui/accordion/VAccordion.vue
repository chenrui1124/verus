<script setup lang="ts">
import type { AccordionProps } from '.'

import { ref } from 'vue'
import { Icon, boolAttr } from '@verus-ui/common'

defineOptions({ name: 'Accordion' })

const { width = 'auto', variant = 'outlined', init } = defineProps<AccordionProps>()

const visible = ref(init)

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateRows: visible ? '3.5rem 1fr' : '3rem 0fr' }"
    :data-danger="boolAttr(danger)"
    :class="[
      'group/v-accordion relative grid grid-cols-1 rounded-v2 transition-all duration-500 ease-braking',
      {
        'bg-pri-ctr data-[danger]:bg-err-ctr': variant === 'solid',
        'bg-bsc before:v-shade before:border-v1 before:border-solid before:border-pri before:transition-colors before:duration-inherit before:ease-inherit data-[danger]:before:border-err':
          variant === 'outlined'
      }
    ]"
  >
    <!--* Title *-->
    <div
      @click="visible = !visible"
      :class="[
        'flex cursor-pointer items-center gap-4 rounded-inherit px-6 text-pri transition-colors duration-300 *:transition *:duration-300 group-data-[danger]/v-accordion:text-err',
        {
          'hover:bg-on-bsc/8': variant === 'solid',
          'hover:bg-pri-ctr data-[danger]:hover:bg-err-ctr': variant === 'outlined'
        }
      ]"
    >
      <Icon v-if="icon" :icon class="-ml-1" />

      <div class="pointer-events-none mr-auto select-none text-base">
        {{ title }}
      </div>

      <Icon icon="i-[solar--alt-arrow-right-linear]" :class="['-mr-1', { 'rotate-90': visible }]" />
    </div>

    <!--* Content *-->
    <div
      :class="[
        'overflow-hidden rounded-b-v2 px-6 text-sm/6 transition-all duration-inherit ease-inherit',
        {
          'pb-6 pt-4': visible,
          'text-on-pri-var group-data-[danger]/v-accordion:text-on-err-var': variant === 'solid',
          'text-on-bsc': variant === 'outlined'
        }
      ]"
    >
      <slot />
    </div>
  </div>
</template>
