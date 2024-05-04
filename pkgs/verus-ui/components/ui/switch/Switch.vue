<script setup lang="ts">
import type { SwitchModel, SwitchProps } from '.'

import { withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Switch') })

defineProps<SwitchProps>()

const modelValue = defineModel<SwitchModel['modelValue']>({ required: true })

const emit = defineEmits<{ change: [newValue?: boolean] }>()

function onChange(e: Event) {
  const el = e.target as HTMLInputElement

  requestAnimationFrame(() => {
    modelValue.value = el.checked
    emit('change', modelValue.value)
  })
}
</script>

<template>
  <label
    :class="[
      'group/switch relative inline-block h-7 w-12 cursor-pointer rounded-full transition-colors duration-300 has-[:focus-visible]:v-outline has-[:disabled]:v-disabled',
      'before:v-shade before:border-1.6 before:border-solid before:transition-colors before:duration-inherit',
      'after:pointer-events-none after:absolute after:inset-y-1 after:left-1 after:-m-2 after:size-9 after:rounded-inherit after:transition after:duration-inherit after:ease-braking',
      modelValue
        ? 'bg-pri before:border-transparent after:translate-x-5 focus-within:after:bg-pri/12 hover:after:bg-pri/8 has-[:disabled]:bg-dis'
        : 'bg-bsc before:border-otl before:bg-otl/16 focus-within:after:bg-on-bsc/12 hover:after:bg-on-bsc/8 has-[:disabled]:before:border-dis'
    ]"
  >
    <input
      type="checkbox"
      @change="onChange"
      :disabled
      :checked="!!modelValue"
      :class="[
        'pointer-events-none absolute inset-y-1 left-1 m-0 size-5 appearance-none rounded-inherit outline-none transition duration-inherit ease-braking group-active/switch:scale-125',
        modelValue ? 'translate-x-5 bg-on-pri disabled:bg-bsc' : 'scale-75 bg-otl'
      ]"
    />
  </label>
</template>
