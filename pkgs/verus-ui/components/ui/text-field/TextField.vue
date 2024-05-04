<script setup lang="ts">
import type { TextFieldModel, TextFieldProps } from '.'

import { computed } from 'vue'
import { BaseIcon, htmlAttribute, withPrefix } from '@verus-ui/common'
import { EACH_TYPE } from '.'

defineOptions({ name: withPrefix('TextField'), inheritAttrs: false })

const { type = 'text', variant = 'outlined', validator } = defineProps<TextFieldProps>()

const _type = computed(() => (EACH_TYPE.includes(type) ? type : 'text'))

const modelValue = defineModel<TextFieldModel['modelValue']>({ required: true })

const valid = defineModel<TextFieldModel['valid']>('valid')

function clear() {
  modelValue.value = ''
}

const isValid = validator
  ? computed(() => {
      valid.value = validator(modelValue.value)
      return !modelValue.value || valid.value
    })
  : true

const emit = defineEmits<{ submit: [payload: Event] }>()

function onSubmit(evt: Event) {
  if (typeof isValid == 'object' && (!isValid.value || !modelValue.value)) return
  emit('submit', evt)
}
</script>

<template>
  <form class="relative inline-block rounded-v1">
    <input
      @submit.prevent="onSubmit"
      :type="_type"
      :data-invalid="htmlAttribute(isValid)"
      v-bind="$attrs"
      v-model="modelValue"
      :class="[
        'peer/text-field box-border h-10 w-full rounded-inherit border-1.2 border-solid text-sm text-on-bsc transition duration-300 placeholder:text-on-bsc invalid:focus:border-err invalid:focus-visible:v-outline-danger disabled:bg-dis disabled:v-disabled',
        {
          [`border-transparent invalid:bg-err-ctr ${isValid ? 'bg-pri-ctr' : 'bg-err-ctr'}`]:
            variant === 'solid',
          [`bg-bsc invalid:border-err ${isValid ? 'border-otl' : 'border-err text-err'}`]:
            variant === 'outlined'
        },
        clearable ? 'pr-10' : 'pr-3',
        icon ? 'pl-10' : 'pl-3',
        isValid
          ? 'focus:border-pri focus-visible:v-outline'
          : 'focus:border-err focus-visible:v-outline-danger'
      ]"
    />

    <component
      :is="icon && BaseIcon"
      :name="icon"
      size="lg"
      class="absolute inset-y-0 left-2 my-auto text-on-pri-var transition-colors duration-300 peer-invalid/text-field:text-on-err peer-focus/text-field:text-pri"
    />

    <Transition enterFromClass="scale-0" leaveToClass="scale-0">
      <button
        v-if="clearable && !disabled"
        v-show="modelValue"
        @click="clear"
        type="button"
        class="absolute inset-y-0 right-0 inline-flex w-10 cursor-pointer items-center justify-center rounded-inherit border-none bg-transparent transition duration-300 before:i-[solar--close-circle-bold-duotone] before:min-h-5 before:min-w-5 before:text-otl before:transition-colors before:duration-300 hover:before:text-err focus:before:text-err focus-visible:v-outline"
      ></button>
    </Transition>
  </form>
</template>
