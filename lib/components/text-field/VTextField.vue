<script setup lang="ts">
import type { TextFieldModel, TextFieldProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'

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
  emit('submit', e)
}
</script>

<template>
  <form class="relative inline-flex h-10 rounded-v1">
    <input
      @submit.prevent="onSubmit"
      :type="secret ? 'password' : 'text'"
      v-bind="{ ...$attrs, autocomplete, pattern, placeholder, disabled }"
      v-model="modelValue"
      class="peer/v-text-field invalid:focus-visible:-outline-danger relative flex-1 rounded-inherit text-sm text-on-bsc transition-all duration-300 v-outline-none v-border placeholder:text-on-bsc invalid:focus:border-err disabled:bg-dis disabled:v-disabled"
      :class="[
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
      :i="icon"
      class="absolute inset-y-2 left-2 text-on-pri-var peer-invalid/n-text-field:text-on-err peer-focus/v-text-field:text-pri"
      size="lg"
    />

    <Transition enter-from-class="scale-0" leave-to-class="scale-0">
      <button
        type="button"
        v-if="clearable && !disabled"
        v-show="modelValue"
        @click="clear"
        class="absolute inset-y-0 right-0 inline-flex size-10 items-center justify-center rounded-inherit border-none bg-transparent text-otl transition duration-300 hover:text-err focus:text-err focus-visible:v-outline"
      >
        <Icon i="i-[solar--close-circle-bold-duotone]" />
      </button>
    </Transition>
  </form>
</template>
