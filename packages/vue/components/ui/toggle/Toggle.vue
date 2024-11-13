<script lang="ts">
import { Icon, withPrefix } from '@verus-ui/common'

export interface ToggleProps {
  fallbackIcon?: string
  fallbackLabel?: string
  icon?: string
  label?: string
}

export interface ToggleModel {
  modelValue?: boolean | undefined
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('Toggle') })

defineProps<ToggleProps>()

const modelValue = defineModel<ToggleModel['modelValue']>()

const emit = defineEmits<{ change: [newValue: boolean] }>()

function onChange(evt: Event) {
  const el = evt.target as HTMLInputElement

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
      <Icon
        v-if="icon && (modelValue || !fallbackIcon)"
        :key="icon"
        :name="icon"
        size="lg"
        class="-mx-1"
      />
      <Icon
        v-if="fallbackIcon && !modelValue"
        :key="fallbackIcon"
        :name="fallbackIcon"
        size="lg"
        class="-mx-1"
      />
    </TransitionGroup>

    <slot>{{ fallbackLabel ? (modelValue ? label : fallbackLabel) : label }}</slot>
  </label>
</template>
