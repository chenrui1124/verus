<script setup lang="ts">
import type { FloatButtonProps } from '.'

import { Icon, Tooltip } from '@base'
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
      @click="onClick"
      type="button"
      v-bind="{ disabled }"
      :class="[
        'bottom-6 right-6 z-20 flex size-14 cursor-pointer items-center justify-center rounded-v2 border-none drop-shadow-xl transition-all duration-300 ease-braking focus-visible:v-outline active:scale-90 disabled:bg-dis disabled:v-disabled sm:bottom-12 sm:right-12',
        cls`scale-90`,
        absolute ? 'absolute' : 'fixed',
        {
          solid: 'bg-pri text-on-pri',
          tonal: 'bg-pri-var text-on-pri-var'
        }[variant]
      ]"
    >
      <Icon v-if="icon" :icon="icon" size="xl" class="transition-colors duration-300" />

      <Tooltip
        v-if="tooltip"
        v-bind="typeof tooltip == 'string' ? { content: tooltip } : tooltip"
      />
    </button>
  </Teleport>
</template>
