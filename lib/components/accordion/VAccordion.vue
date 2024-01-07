<script setup lang="ts">
import type { AccordionProps } from '.'

import { ref } from 'vue'
import { Icon } from '@base'

defineOptions({ name: 'Accordion' })

const { init, width = 'auto' } = defineProps<AccordionProps>()

const visible = ref(init)

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width, gridTemplateRows: visible ? '3.5rem 1fr' : '3rem 0fr' }"
    class="relative grid grid-cols-1 rounded-v2 transition-all duration-500 ease-braking before:v-shade before:border before:border-solid before:border-otl before:transition-colors before:duration-300"
  >
    <div
      @click="visible = !visible"
      class="flex cursor-pointer items-center gap-4 rounded-inherit px-6 text-pri transition-colors duration-300 hover:bg-pri/8"
    >
      <Icon v-if="icon" :i="icon" class="-ml-0.5" />
      <div class="select-none text-base">{{ title }}</div>
      <Icon
        i="i-[solar--alt-arrow-right-line-duotone]"
        class="-mr-1 ml-auto transition-all duration-inherit"
        :class="{ 'rotate-90': visible }"
      />
    </div>

    <div
      class="overflow-y-hidden rounded-b-v2 px-6 text-sm leading-6 text-on-bsc transition-all duration-500 ease-braking"
      :class="{ 'pb-6 pt-4': visible }"
    >
      <slot />
    </div>
  </div>
</template>
