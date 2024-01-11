<script setup lang="ts">
import type { IconButtonProps } from '.'

import { Icon } from '@base'
import { useClassName } from '@composable'

defineOptions({ name: 'IconButton' })

defineProps<IconButtonProps>()

const emit = defineEmits<{ click: [event?: Event] }>()

const [cls, activate] = useClassName()

function onClick(e: Event) {
  activate(150)
  emit('click', e)
}
</script>

<template>
  <button
    :disabled
    @click="onClick"
    class="group/v-icon-button relative inline-flex size-10 cursor-pointer items-center justify-center rounded-v1 border-none bg-transparent transition-all duration-300 ease-braking v-outline-none disabled:text-dis disabled:v-disabled"
    :class="{
      'text-pri hover:bg-pri/8 focus:bg-pri/12 focus-visible:v-outline': !danger,
      'text-err hover:bg-err/8 focus:bg-err/12 focus-visible:v-outline-danger': danger
    }"
  >
    <Icon
      :i="icon"
      class="transition group-active/v-icon-button:scale-75"
      :class="cls`scale-75`"
      size="lg"
    />
  </button>
</template>
