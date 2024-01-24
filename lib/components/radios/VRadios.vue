<script setup lang="ts">
import type { RadiosModel, RadiosProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'

defineOptions({ name: 'Radios' })

const { each } = defineProps<RadiosProps>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { text: i, value: i } : i)))

const modelValue = defineModel<RadiosModel['modelValue']>({ required: true })
</script>

<template>
  <div :style="{ width }" class="flex flex-col gap-2">
    <label
      v-for="(item, index) in _each"
      :key="index"
      class="group/v-radio relative box-border inline-flex h-12 min-w-12 cursor-pointer select-none items-center justify-center gap-4 rounded-v2 border-otl px-4 text-on-bsc outline-transparent transition-all duration-300 v-outline-none v-border hover:bg-pri/8 has-[:checked]:border-pri has-[:checked]:bg-pri-ctr has-[:checked]:text-pri has-[:focus-visible]:v-outline data-[selected]:pointer-events-none data-[selected]:border-pri"
    >
      <Icon v-if="item.icon" :icon="item.icon" class="-m-1" />

      <span class="mr-auto text-sm duration-inherit">{{ item.text }}</span>

      <span
        class="pointer-events-none box-border inline-flex size-4 items-center justify-center rounded-full border-inherit bg-bsc transition-all duration-inherit v-border group-active/v-radio:scale-75 has-[:checked]:border-4"
      >
        <input
          type="radio"
          :value="item.value"
          v-model="modelValue"
          class="pointer-events-none -z-10 m-0 opacity-0 outline-none"
        />
      </span>
    </label>
  </div>
</template>
