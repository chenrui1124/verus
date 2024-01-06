<script setup lang="ts">
import type { RadiosModel, RadiosProps } from '.'

import { Icon } from '@base'

defineOptions({ name: 'Radios' })

defineProps<RadiosProps>()

const modelValue = defineModel<RadiosModel['modelValue']>({ required: true })
</script>

<template>
  <div :style="{ width }" class="flex flex-col gap-2">
    <label
      v-for="i in each"
      :key="typeof i == 'string' ? i : i.value"
      class="group/v-radio relative box-border inline-flex h-12 min-w-12 select-none items-center justify-center gap-4 rounded-v2 border border-solid px-4 outline outline-0 outline-transparent transition-all duration-300 v-outline-none hover:bg-pri/8 has-[:focus-visible]:v-outline"
      :class="[
        (typeof i == 'string' ? i : i.value) === modelValue
          ? 'pointer-events-none border-pri bg-pri/12 text-pri'
          : 'cursor-pointer border-otl text-on-bsc'
      ]"
    >
      <Icon v-if="typeof i != 'string' && i.icon" :i="i.icon" class="-m-1" />
      <span class="mr-auto text-sm">{{ typeof i == 'string' ? i : i.text }}</span>
      <span
        class="pointer-events-none box-border inline-flex size-4 items-center justify-center rounded-full border-solid bg-bsc transition-all duration-inherit group-active/v-radio:scale-75"
        :class="
          (typeof i == 'string' ? i : i.value) === modelValue ? 'border-4' : 'border border-otl'
        "
      >
        <input
          type="radio"
          v-model="modelValue"
          :value="typeof i == 'string' ? i : i.value"
          class="m-0 opacity-0 outline-none"
        />
      </span>
    </label>
  </div>
</template>
