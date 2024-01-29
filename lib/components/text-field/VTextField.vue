<script setup lang="ts">
import type { TextFieldModel, TextFieldProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'
import { boolAttr } from '@utils'

defineOptions({ name: 'TextField', inheritAttrs: false })

const { validator, variant = 'outlined' } = defineProps<TextFieldProps>()

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

const emit = defineEmits<{ submit: [e: Event] }>()

function onSubmit(e: Event) {
  if (typeof isValid == 'object' && (!isValid.value || !modelValue.value)) return
  emit('submit', e)
}
</script>

<template>
  <form class="relative inline-block rounded-v1">
    <input
      @submit.prevent="onSubmit"
      :type="secret ? 'password' : 'text'"
      :data-invalid="boolAttr(isValid)"
      v-bind="{ ...$attrs, autocomplete, pattern, placeholder, disabled }"
      v-model="modelValue"
      :class="[
        'peer/v-text-field box-border h-10 rounded-inherit border-v1 border-solid text-sm text-on-bsc transition-all duration-300 v-outline-none placeholder:text-on-bsc invalid:focus:border-err invalid:focus-visible:v-outline-danger disabled:bg-dis disabled:v-disabled',
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

    <Icon
      v-if="icon"
      :icon="icon"
      size="lg"
      class="absolute inset-y-0 left-2 my-auto text-on-pri-var transition-colors duration-300 peer-invalid/v-text-field:text-on-err peer-focus/v-text-field:text-pri"
    />

    <Transition enter-from-class="scale-0" leave-to-class="scale-0">
      <button
        v-if="clearable && !disabled"
        v-show="modelValue"
        @click="clear"
        type="button"
        class="absolute inset-y-0 right-0 inline-flex w-10 items-center justify-center rounded-inherit border-none bg-transparent text-otl transition duration-300 hover:text-err focus:text-err focus-visible:v-outline"
      >
        <Icon icon="i-[solar--close-circle-bold-duotone]" class="transition-colors duration-300" />
      </button>
    </Transition>
  </form>
</template>
