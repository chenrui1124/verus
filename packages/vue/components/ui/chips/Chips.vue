<script lang="ts">
import type { OrReadonly } from 'mm3'

import { computed } from 'vue'
import { Icon, withPrefix } from '@verus-ui/common'

export interface ChipsProps {
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  selectable?: boolean
}

export interface ChipsModel {
  modelValue?: string[]
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('Chips') })

const { each } = defineProps<ChipsProps>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { label: i, value: i } : i)))

const modelValue = defineModel<ChipsModel['modelValue']>({ default: undefined })
</script>

<template>
  <div
    class="inline-flex flex-wrap gap-2"
    :class="{ '*:cursor-pointer *:select-none': selectable }"
  >
    <component
      v-for="({ value, icon, label }, index) in _each"
      :key="index"
      :is="selectable ? 'label' : 'span'"
      class="relative box-border inline-flex h-8 items-center justify-center rounded-v1 border-1.2 border-solid border-otl bg-bsc px-4 text-sm text-on-bsc transition duration-300 has-[:checked]:border-transparent has-[:checked]:bg-pri-var has-[:checked]:text-on-pri-var has-[:focus-visible]:v-outline"
    >
      <input
        v-if="selectable"
        type="checkbox"
        :value
        v-model="modelValue"
        class="absolute inset-0 -z-10 m-auto outline-none"
      />

      <Icon
        v-if="icon"
        :name="icon"
        size="sm"
        class="-ml-0.5 mr-2 transition-colors duration-300"
      />

      {{ label }}
    </component>
  </div>
</template>
