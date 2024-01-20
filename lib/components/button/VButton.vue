<script setup lang="ts">
import type { ButtonProps } from '.'

import { Icon, Tooltip } from '@base'

defineOptions({ name: 'Button' })

const { variant = 'outlined', loading } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

function onClick(e: Event) {
  loading || emit('click', e)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <button
    @click="onClick"
    type="button"
    :disabled="disabled"
    :tabindex="loading ? -1 : void 0"
    :data-danger="danger ? '' : void 0"
    class="relative flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none px-4 transition-all duration-300 v-outline-none before:v-shade before:transition-colors before:duration-inherit focus-visible:v-outline disabled:text-on-bsc disabled:v-disabled data-[danger]:focus-visible:v-outline-danger"
    :class="{
      'group/v-tooltip group-focus/v-tooltip group-focus-visible/v-tooltip': tooltip,

      'bg-pri text-on-pri hover:before:bg-bsc/8 focus:text-opacity-72 focus:before:bg-on-bsc/12 data-[danger]:bg-err data-[danger]:text-on-err':
        variant === 'solid',

      'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12 data-[danger]:bg-err-var data-[danger]:text-on-err-var':
        variant === 'tonal',

      'disabled:bg-dis': ['solid', 'tonal'].includes(variant),

      'before:border-otl before:v-border focus:before:border-current': variant === 'outlined',

      'bg-transparent text-pri hover:before:bg-pri/8 focus:before:bg-pri/12 data-[danger]:text-err data-[danger]:hover:before:bg-err/8 data-[danger]:focus:before:bg-err/12':
        ['outlined', 'clean'].includes(variant),

      'pointer-events-none': loading
    }"
  >
    <Icon v-if="icon" :icon="icon" class="-ml-1" :class="loading && 'opacity-0'" />

    <span
      class="pointer-events-none select-none text-sm tracking-wider duration-inherit"
      :class="[uppercase && 'uppercase', loading && 'opacity-0']"
    >
      <slot>{{ text }}</slot>
    </span>

    <Icon v-if="appendIcon" :icon="appendIcon" class="-mr-1" :class="loading && 'opacity-0'" />

    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <Icon
        v-if="loading"
        icon="i-[svg-spinners--ring-resize]"
        class="absolute inset-0 m-auto disabled:hidden"
      />
    </Transition>

    <Tooltip v-if="tooltip" v-bind="typeof tooltip == 'string' ? { content: tooltip } : tooltip" />
  </button>
</template>
