<script setup lang="ts">
import type { ButtonProps } from '.'

import { computed } from 'vue'
import { BaseIcon, boolAttr } from '@verus-ui/common'

const { variant = 'solid', loading, href } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [evt: MouseEvent] }>()

const listener = computed(() => {
  if (href) return {}
  return {
    click: (evt: MouseEvent) => {
      loading || emit('click', evt)
    }
  }
})

defineSlots<{ default(props: void): string }>()
</script>

<template>
  <component
    @="listener"
    :is="href ? 'a' : 'button'"
    :type="href ? void 0 : 'button'"
    :disabled="href ? void 0 : disabled"
    :tabindex="loading ? -1 : void 0"
    :href="href ? href : void 0"
    :data-danger="boolAttr(danger)"
    :class="[
      'relative inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none bg-on-bsc px-4 text-sm/9 tracking-wide text-bsc transition duration-300',
      'before:v-shade before:transition before:duration-300',
      'focus-visible:v-outline data-[danger]:focus-visible:v-outline-danger',
      {
        'bg-pri text-on-pri shadow shadow-on-bsc/32 hover:before:bg-bsc/8 focus:text-on-pri/72 focus:before:bg-on-bsc/12 data-[danger]:bg-err data-[danger]:text-on-err':
          variant === 'solid',
        'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12 data-[danger]:bg-err-var data-[danger]:text-on-err-var':
          variant === 'tonal',
        'before:border-v1 before:border-solid before:border-otl focus:before:border-current':
          variant === 'outlined',
        'bg-transparent text-pri hover:before:bg-pri/8 focus:before:bg-pri/12  data-[danger]:text-err data-[danger]:hover:before:bg-err/8 data-[danger]:focus:before:bg-err/12':
          ['outlined', 'clean'].includes(variant),

        uppercase,
        'pointer-events-none': loading,
        'no-underline': href,

        'disabled:shadow-none': variant === 'solid',
        'disabled:!bg-dis': ['solid', 'tonal'].includes(variant)
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
        {{ text }}
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
