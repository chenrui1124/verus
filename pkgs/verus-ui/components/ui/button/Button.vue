<script setup lang="ts">
import type { ButtonProps } from '.'

import { computed } from 'vue'
import { BaseIcon, htmlAttribute } from '@verus-ui/common'

const { variant = 'tonal', loading, href } = defineProps<ButtonProps>()

const _variant = computed(() =>
  ['solid', 'outlined', 'tonal', 'clean'].includes(variant) ? variant : 'tonal'
)

const emit = defineEmits<{ click: [evt: MouseEvent] }>()

const listener = computed(() => {
  return href ? {} : { click: (evt: MouseEvent) => void (loading || emit('click', evt)) }
})

defineSlots<{ default(): string }>()
</script>

<template>
  <component
    @="listener"
    :is="href ? 'a' : 'button'"
    :type="htmlAttribute('button', !href)"
    :disabled
    :tabindex="htmlAttribute('-1', loading)"
    :href="htmlAttribute(href, !!href)"
    :data-danger="htmlAttribute(danger)"
    :class="[
      'relative inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none bg-on-bsc px-4 text-sm/9 tracking-wide text-bsc transition duration-300',
      'before:v-shade before:transition before:duration-300',
      'focus-visible:v-outline data-[danger]:focus-visible:v-outline-danger',
      {
        'bg-pri text-on-pri shadow shadow-on-bsc/32 hover:before:bg-bsc/8 focus:text-on-pri/72 focus:before:bg-on-bsc/12 data-[danger]:bg-err data-[danger]:text-on-err':
          _variant === 'solid',
        'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12 data-[danger]:bg-err-var data-[danger]:text-on-err-var':
          _variant === 'tonal',
        'before:border-v1 before:border-solid before:border-otl focus:before:border-current':
          _variant === 'outlined',
        'bg-transparent text-pri hover:before:bg-pri/8 focus:before:bg-pri/12 data-[danger]:text-err data-[danger]:hover:before:bg-err/8 data-[danger]:focus:before:bg-err/12':
          ['outlined', 'clean'].includes(_variant),
        uppercase,
        'pointer-events-none': loading,
        'no-underline': href,
        'disabled:shadow-none': _variant === 'solid',
        'disabled:!bg-dis': ['solid', 'tonal'].includes(_variant)
      },
      'disabled:!text-on-bsc disabled:v-disabled'
    ]"
  >
    <component
      :is="icon && BaseIcon"
      :name="icon"
      :class="['-ml-1', { 'text-transparent': !disabled && loading }]"
    />

    <span :class="['pointer-events-none', { 'text-transparent': !disabled && loading }]">
      <slot>
        {{ label }}
      </slot>
    </span>

    <component
      :is="appendIcon && BaseIcon"
      :name="appendIcon"
      :class="['-mr-1', { 'text-transparent': !disabled && loading }]"
    />

    <Transition enterFromClass="opacity-0" leaveToClass="opacity-0">
      <component
        :is="!disabled && loading && BaseIcon"
        name="i-[svg-spinners--ring-resize]"
        class="absolute inset-0 m-auto transition duration-300"
      />
    </Transition>
  </component>
</template>
