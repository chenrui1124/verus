<script setup lang="ts">
import type { ButtonProps } from '.'

import { Icon, Tooltip } from '@base'
import { boolAttr } from '@utils'

defineOptions({ name: 'Button' })

const { variant = 'outlined', loading } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [event: MouseEvent] }>()

function onClick(e: MouseEvent) {
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
    :data-danger="boolAttr(danger)"
    :class="[
      'group/v-button relative flex h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none px-4 text-sm tracking-wider transition-all duration-300 v-outline-none before:v-shade before:transition before:duration-inherit focus-visible:v-outline disabled:!text-on-bsc disabled:v-disabled data-[danger]:focus-visible:v-outline-danger',

      {
        'group/v-tooltip': tooltip,
        'pointer-events-none': loading,

        'bg-pri text-on-pri hover:before:bg-bsc/8 focus:text-opacity-72 focus:before:bg-on-bsc/12 data-[danger]:bg-err data-[danger]:text-on-err':
          variant === 'solid',
        'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12 data-[danger]:bg-err-var data-[danger]:text-on-err-var':
          variant === 'tonal',
        'disabled:!bg-dis': ['solid', 'tonal'].includes(variant),

        'before:border-v1 before:border-solid before:border-otl focus:before:border-current':
          variant === 'outlined',
        'bg-transparent text-pri hover:before:bg-pri/8 focus:before:bg-pri/12 data-[danger]:text-err data-[danger]:hover:before:bg-err/8 data-[danger]:focus:before:bg-err/12':
          ['outlined', 'clean'].includes(variant)
      },

      '*:transition-color *:duration-300'
    ]"
  >
    <Icon v-if="icon" :icon="icon" :class="['-ml-1', loading && !disabled && 'opacity-0']" />

    <span
      :class="[
        'pointer-events-none select-none text-sm tracking-wider',
        uppercase && 'uppercase',
        loading && !disabled && 'opacity-0'
      ]"
    >
      <slot>{{ text }}</slot>
    </span>

    <Icon
      v-if="appendIcon"
      :icon="appendIcon"
      :class="['-mr-1', loading && !disabled && 'opacity-0']"
    />

    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <Icon
        v-if="loading"
        icon="i-[svg-spinners--ring-resize]"
        class="absolute inset-0 m-auto group-disabled/v-button:hidden"
      />
    </Transition>

    <Tooltip v-if="tooltip" v-bind="typeof tooltip == 'string' ? { content: tooltip } : tooltip" />
  </button>
</template>
