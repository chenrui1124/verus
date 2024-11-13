<script lang="ts">
import type { VariantProp } from '@verus-ui/ts'

import { computed, type InputHTMLAttributes } from 'vue'
import { clsx } from 'clsx'
import { Variant } from '@verus-ui/ts'
import { Icon, htmlAttribute, withPrefix } from '@verus-ui/common'

export interface TextFieldProps {
  clearable?: boolean
  disabled?: boolean
  icon?: string
  pattern?: InputHTMLAttributes['pattern']
  /**
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'tel' | 'url'
  validator?: (modelValue: string | undefined) => boolean
  /**
   * @default 'outlined'
   */
  variant?: VariantProp<'solid' | 'outlined'>
}

export interface TextFieldModel {
  modelValue?: string
  valid?: boolean
}
</script>

<script setup lang="ts">
defineOptions({ inheritAttrs: false, name: withPrefix('TextField') })

const { type = 'text', validator, variant = Variant.Solid } = defineProps<TextFieldProps>()

const modelValue = defineModel<TextFieldModel['modelValue']>()

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

const emit = defineEmits<{ submit: [evt: Event] }>()

function onSubmit(evt: Event) {
  if (typeof isValid == 'object' && (!isValid.value || !modelValue.value)) return
  emit('submit', evt)
}
</script>

<template>
  <form class="relative inline-block rounded-v1">
    <input
      @submit.prevent="onSubmit"
      v-model="modelValue"
      :data-invalid="htmlAttribute(isValid)"
      :="$attrs"
      :disabled
      :pattern
      :type
      :class="[
        'peer/text-field invalid:focus:border-err invalid:focus-visible:v-outline-danger box-border h-10 w-full rounded-inherit border-1.2 border-solid pb-px text-sm text-on-bsc transition duration-300 placeholder:text-on-bsc disabled:pointer-events-none disabled:bg-dis disabled:opacity-48',
        {
          [Variant.Solid]: clsx(
            'border-transparent invalid:bg-err-ctr',
            isValid ? 'bg-pri-ctr' : 'bg-err-ctr'
          ),
          [Variant.Outlined]: clsx(
            'invalid:border-err bg-bsc',
            isValid ? 'border-otl' : 'border-err text-err'
          )
        }[variant],
        clearable ? 'pr-10' : 'pr-3',
        icon ? 'pl-10' : 'pl-3',
        isValid
          ? 'focus:border-pri focus-visible:v-outline'
          : 'focus:border-err focus-visible:v-outline-danger'
      ]"
    />

    <Icon
      v-if="icon"
      :name="icon"
      size="lg"
      class="peer-invalid/text-field:text-on-err absolute inset-y-2 left-2 text-on-pri-var transition-colors duration-300 peer-focus/text-field:text-pri"
    />

    <Transition enterFromClass="scale-0" leaveToClass="scale-0">
      <button
        v-if="clearable && !disabled"
        v-show="modelValue"
        @click="clear"
        type="button"
        class="hover:before:text-err focus:before:text-err absolute inset-y-0 right-0 inline-flex w-10 cursor-pointer items-center justify-center rounded-inherit border-none bg-transparent transition duration-300 before:i-[solar--close-circle-bold-duotone] before:min-h-5 before:min-w-5 before:text-otl before:transition-colors before:duration-300 focus-visible:v-outline"
      ></button>
    </Transition>
  </form>
</template>
