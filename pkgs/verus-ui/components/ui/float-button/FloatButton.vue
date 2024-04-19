<script setup lang="ts">
import type { FloatButtonProps } from '.'

import { BaseIcon, useClassName } from '@verus-ui/common'

const { variant = 'tonal' } = defineProps<FloatButtonProps>()

const emit = defineEmits<{ click: [evt: Event] }>()

const [cls, activate] = useClassName()

function onClick(event: Event) {
  activate(150)
  emit('click', event)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <Teleport to="body" :disabled="absolute">
    <button
      @click="onClick"
      type="button"
      :disabled
      :class="[
        'bottom-6 right-6 z-20 flex size-14 cursor-pointer items-center justify-center rounded-v2 border-none drop-shadow-xl transition duration-300 ease-braking focus-visible:v-outline active:scale-90 disabled:bg-dis disabled:text-on-bsc disabled:v-disabled sm:bottom-12 sm:right-12',
        cls`scale-90`,
        absolute ? 'absolute' : 'fixed',
        {
          solid: 'bg-pri text-on-pri',
          tonal: 'bg-pri-var text-on-pri-var'
        }[variant]
      ]"
    >
      <BaseIcon v-if="icon" :name="icon" size="xl" />
    </button>
  </Teleport>
</template>
