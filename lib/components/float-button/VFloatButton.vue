<script setup lang="ts">
import type { FloatButtonProps } from '.'

import { Icon } from '@base'
import { useClassName } from '@composable'

defineOptions({ name: 'FloatButton' })

const { variant = 'tonal' } = defineProps<FloatButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

const [cls, activate] = useClassName()

function onClick(event: Event) {
  activate(150)
  emit('click', event)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <Teleport to="body">
    <button
      :disabled
      @click="onClick"
      class="bottom-6 right-6 z-20 flex size-14 cursor-pointer items-center justify-center rounded-v2 border-none drop-shadow-xl transition-all duration-300 ease-braking focus-visible:v-outline disabled:bg-dis disabled:v-disabled sm:bottom-12 sm:right-12"
      :class="[
        'active:scale-90',
        cls`scale-90`,
        absolute ? 'absolute' : 'fixed',
        { 'bg-pri text-on-pri': variant === 'solid', 'bg-nrm text-on-nrm': variant === 'tonal' }
      ]"
    >
      <Icon v-if="icon" :i="icon" size="xl" />
    </button>
  </Teleport>
</template>
