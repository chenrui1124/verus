<script setup lang="ts">
import type { RadiosModel, RadiosProps } from '.'

import { computed } from 'vue'
import { BasicIcon, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Radios') })

const { each } = defineProps<RadiosProps>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { label: i, value: i } : i)))

const modelValue = defineModel<RadiosModel['modelValue']>({ required: true })
</script>

<template>
  <div :style="{ width }" class="flex flex-col gap-2">
    <label
      v-for="({ value, icon, label }, index) in _each"
      :key="index"
      class="group/radio relative box-border inline-flex h-12 min-w-12 cursor-pointer select-none items-center justify-center gap-4 rounded-v2 border-1.2 border-solid border-otl px-4 text-sm text-on-bsc outline-transparent transition duration-300 hover:bg-pri/8 has-[:checked]:border-pri has-[:checked]:bg-pri-ctr has-[:checked]:text-pri has-[:focus-visible]:v-outline"
    >
      <component :is="icon && BasicIcon" :name="icon" class="-m-1" />

      {{ label }}

      <input
        type="radio"
        :value="value"
        v-model="modelValue"
        class="pointer-events-none m-0 ml-auto box-border size-4 appearance-none rounded-full border-1.2 border-solid border-inherit bg-bsc outline-none transition-all duration-300 ease-braking checked:border-4 group-active/radio:scale-75"
      />
    </label>
  </div>
</template>
