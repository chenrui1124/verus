<script setup lang="ts">
import type { ButtonProps, ButtonSlots } from '.'

import { computed, useAttrs } from 'vue'
import { BaseIcon, cm, htmlAttribute, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Button') })

const { variant = 'tonal', fontWeight = 'medium', loading } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [payload?: MouseEvent] }>()

const listener = computed(() => {
  return href ? {} : { click: (payload: MouseEvent) => void (loading || emit('click', payload)) }
})

const { href, ...others } = useAttrs()

defineSlots<ButtonSlots>()
</script>

<template>
  <component
    @="listener"
    :="others"
    :is="href ? 'a' : 'button'"
    :disabled="disabled"
    :type="htmlAttribute('button', !href)"
    :tabindex="htmlAttribute('-1', loading)"
    :href="htmlAttribute(href, !!href)"
    :data-danger="htmlAttribute(danger)"
    :class="[
      'font relative box-border inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none bg-on-bsc px-5 text-sm/9 tracking-wide text-bsc transition duration-300',
      'before:v-shade before:transition before:duration-300',
      'focus-visible:v-outline data-[danger]:focus-visible:v-outline-danger',
      'disabled:!text-on-bsc disabled:v-disabled',
      cm({
        'bg-pri text-on-pri before:border-1.2 before:border-solid before:border-white/32 before:border-b-black/32 hover:before:bg-bsc/8 focus:text-on-pri/72 focus:before:border-transparent focus:before:bg-on-bsc/12 data-[danger]:bg-err data-[danger]:text-on-err':
          'solid',
        'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12 data-[danger]:bg-err-var data-[danger]:text-on-err-var':
          'tonal',
        'before:border-1.2 before:border-solid before:border-otl focus:before:border-current':
          'outlined',
        'bg-transparent text-pri hover:before:bg-pri/8 focus:before:bg-pri/12 data-[danger]:text-err data-[danger]:hover:before:bg-err/8 data-[danger]:focus:before:bg-err/12':
          ['outlined', 'clean'],
        'disabled:!bg-dis': ['solid', 'tonal']
      })
        .rollback('tonal')
        .match(variant),
      {
        'no-underline': href,
        'pointer-events-none': loading,
        capitalize: textTransform === 'capitalize',
        uppercase: textTransform === 'uppercase',
        lowercase: textTransform === 'lowercase',
        'font-normal': fontWeight === 'normal',
        'font-semibold': fontWeight === 'semibold',
        'font-bold': fontWeight === 'bold'
      }
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
