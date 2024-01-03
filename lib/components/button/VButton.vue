<script setup lang="ts">
import type { ButtonProps } from '.'

import { Icon } from '@base'

const { variant = 'outlined', loading } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [e: Event] }>()

function onClick(e: Event) {
  !loading && emit('click', e)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <button
    :disabled
    @click="onClick"
    :tabindex="loading ? -1 : void 0"
    class="relative h-9 cursor-pointer rounded-v1 border-none px-3 transition-all duration-300 before:v-shade before:transition-colors before:duration-inherit disabled:text-on-bsc disabled:v-disabled"
    :class="{
      [!danger ? 'bg-pri text-on-pri' : 'bg-err text-on-err']: variant === 'solid',
      'before:border-bsc/16 hover:before:bg-bsc/8 focus:text-opacity-72 focus:before:bg-on-bsc/12':
        variant === 'solid',

      [!danger ? 'bg-nrm text-on-nrm' : 'bg-err-ctr text-on-err-ctr']: variant === 'tonal',
      'hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12': variant === 'tonal',

      [!danger ? 'text-pri focus:before:border-pri' : 'text-err focus:before:border-err']:
        variant === 'outlined',
      'bg-bsc before:border-otl': variant === 'outlined',

      [!danger ? 'text-pri' : 'text-err']: variant === 'clean',
      'bg-transparent': variant === 'clean',

      'before:border before:border-solid': ['solid', 'outlined'].includes(variant),
      [!danger
        ? 'hover:before:bg-pri/8 focus:before:bg-pri/12'
        : 'hover:before:bg-err/8 focus:before:bg-err/12']: ['outlined', 'clean'].includes(variant),

      'disabled:bg-dis': ['solid', 'tonal'].includes(variant),

      'pointer-events-none': loading
    }"
  >
    <!--* Icon *-->
    <Icon v-if="icon" :i="icon" :class="{ invisible: loading && !disabled }" />

    <!--* Text *-->
    <span
      class="pointer-events-none z-10 select-none text-sm tracking-wider"
      :class="{ uppercase, 'ml-1': !icon, 'mr-1': !appendIcon, invisible: loading && !disabled }"
    >
      <slot>{{ text }}</slot>
    </span>

    <!--* Append Icon *-->
    <Icon v-if="appendIcon" :i="appendIcon" :class="{ invisible: loading && !disabled }" />

    <!--* loading *-->
    <Icon
      v-if="loading && !disabled"
      i="i-[svg-spinners--3-dots-fade]"
      size="lg"
      class="absolute inset-0 m-auto"
    />
  </button>
</template>
