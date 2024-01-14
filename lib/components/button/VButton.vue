<script setup lang="ts">
import type { ButtonProps } from '.'

import { Tooltip } from '@base'

defineOptions({ name: 'Button' })

import { Icon } from '@base'

const { variant = 'outlined', loading } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

function onClick(e: Event) {
  !loading && emit('click', e)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <button
    @click="onClick"
    type="button"
    v-bind="{ disabled, tabindex: loading ? -1 : void 0 }"
    class="group/v-tooltip group-focus/v-tooltip group-focus-visible/v-tooltip relative flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none px-3 transition-all duration-300 v-outline-none before:v-shade before:transition-colors before:duration-inherit disabled:text-on-bsc disabled:v-disabled"
    :class="{
      [!danger ? 'bg-pri text-on-pri' : 'bg-err text-on-err']: variant === 'solid',
      'before:border-bsc/16 hover:before:bg-bsc/8 focus:text-opacity-72 focus:before:bg-on-bsc/12':
        variant === 'solid',

      [!danger ? 'bg-pri-var text-on-pri-var' : 'bg-err-var text-on-err-var']: variant === 'tonal',
      'hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12': variant === 'tonal',

      [!danger ? 'text-pri focus:before:border-pri' : 'text-err focus:before:border-err']:
        variant === 'outlined',
      'bg-bsc before:border-otl': variant === 'outlined',

      [!danger ? 'text-pri' : 'text-err']: variant === 'clean',
      'bg-transparent': variant === 'clean',

      'before:v-border': ['solid', 'outlined'].includes(variant),
      [!danger
        ? 'hover:before:bg-pri/8 focus:before:bg-pri/12'
        : 'hover:before:bg-err/8 focus:before:bg-err/12']: ['outlined', 'clean'].includes(variant),

      'disabled:bg-dis': ['solid', 'tonal'].includes(variant),

      'pointer-events-none': loading,

      'focus-visible:v-outline': !danger,
      'focus-visible:v-outline-danger': danger
    }"
  >
    <!--* Icon *-->
    <Icon v-if="icon" :i="icon" :class="{ 'opacity-0': loading && !disabled }" />

    <!--* Text *-->
    <span
      class="pointer-events-none select-none text-sm tracking-wider duration-inherit"
      :class="{ uppercase, 'ml-1': !icon, 'mr-1': !appendIcon, 'opacity-0': loading && !disabled }"
    >
      <slot>{{ text }}</slot>
    </span>

    <!--* Append Icon *-->
    <Icon v-if="appendIcon" :i="appendIcon" :class="{ 'opacity-0': loading && !disabled }" />

    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <!--* Loading *-->
      <Icon
        v-if="loading && !disabled"
        i="i-[svg-spinners--ring-resize]"
        class="absolute inset-0 m-auto transition duration-inherit"
      />
    </Transition>

    <Tooltip v-if="tooltip" v-bind="typeof tooltip == 'string' ? { content: tooltip } : tooltip" />
  </button>
</template>
