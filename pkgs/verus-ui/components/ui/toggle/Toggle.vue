<script setup lang="ts">
import type { ToggleModel, ToggleProps } from '.'

import { computed } from 'vue'
import { BasicIcon, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Toggle') })

const { icon } = defineProps<ToggleProps>()

const modelValue = defineModel<ToggleModel['modelValue']>()

const _name = computed(() => {
  return typeof icon == 'string' ? icon : modelValue.value ? icon[1] : icon[0]
})

const emit = defineEmits<{ change: [newValue?: boolean] }>()

function onChange(e: Event) {
  const el = e.target as HTMLInputElement

  requestAnimationFrame(() => {
    modelValue.value = el.checked
    emit('change', modelValue.value)
  })
}
defineSlots<{ default(): any }>()
</script>

<template>
  <label
    :class="[
      'relative box-border inline-flex h-9 min-h-9 min-w-9 cursor-pointer select-none items-center justify-center gap-2 rounded-v1 px-2.5 text-sm transition duration-500 ease-braking',
      modelValue ? 'bg-pri/8 text-pri hover:bg-pri/12' : 'text-on-bsc hover:bg-on-bsc/8'
    ]"
  >
    <input
      type="checkbox"
      @change="onChange"
      :checked="modelValue"
      class="pointer-events-none absolute inset-0 m-auto size-0 p-0 outline-none"
    />

    <TransitionGroup
      enterFromClass="opacity-0"
      leaveToClass="opacity-0"
      enterActiveClass="transition-all duration-500 ease-braking"
      leaveActiveClass="transition-all duration-500 ease-braking absolute left-2.5"
    >
      <BasicIcon v-if="icon || icon.length" :key="_name" :name="_name" size="lg" class="-mx-1" />
    </TransitionGroup>

    <slot></slot>
  </label>
</template>
