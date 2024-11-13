<script lang="ts">
import type { OrReadonly } from 'mm3'

import { computed } from 'vue'
import { Icon, withPrefix } from '@verus-ui/common'

export interface RadiosProps {
  /**
   * @example
   *
   * // simple:
   * ['Windows', 'Linux', 'MacOS']
   *
   * // with icon:
   * [
   *  { label: 'Android', icon: 'i-ri:android-fill', value: 'android' },
   *  { label: 'iOS', icon: 'i-ri:apple-fill', value: 'ios' },
   *  { label: 'Windows Phone', icon: 'i-ri:windows-fill', value: 'windows-phone' }
   * ]
   */
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  width?: string
}

export interface RadiosModel {
  modelValue?: string
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('Radios') })

const { each } = defineProps<RadiosProps>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { label: i, value: i } : i)))

const emit = defineEmits<{ change: [newValue: string | undefined] }>()

const modelValue = defineModel<RadiosModel['modelValue']>()

const _modelValue = computed({
  get() {
    return modelValue.value
  },
  set(newValue: string) {
    emit('change', newValue)
    modelValue.value = newValue
  }
})
</script>

<template>
  <div :style="{ width }" class="flex flex-col gap-2">
    <label
      v-for="({ value, icon, label }, index) in _each"
      :key="index"
      class="group/radio relative box-border inline-flex h-12 min-w-12 cursor-pointer select-none items-center justify-center gap-4 rounded-v2 border-1.2 border-solid border-otl px-4 text-sm text-on-bsc outline-transparent transition duration-300 hover:bg-pri/8 has-[:checked]:border-pri has-[:checked]:bg-pri-ctr has-[:checked]:text-pri has-[:focus-visible]:v-outline"
    >
      <Icon v-if="icon" :name="icon" class="-m-1" />

      {{ label }}

      <input
        type="radio"
        :value="value"
        v-model="_modelValue"
        class="pointer-events-none m-0 ml-auto box-border size-4 appearance-none rounded-full border-1.2 border-solid border-inherit bg-bsc outline-none transition-all duration-300 ease-braking checked:border-4 group-active/radio:scale-75"
      />
    </label>
  </div>
</template>
