<script lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@verus-ui/common'

export interface ModalContentProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
defineProps<ModalContentProps>()

const mv = defineModel<boolean>()

const emit = defineEmits<{
  cancel: [evt: Event]
  close: [evt: Event]
}>()

function onCancel(evt: Event) {
  emit('cancel', evt)
  mv.value = false
}
</script>

<template>
  <dialog
    v-if="modelValue"
    @cancel="onCancel"
    @close="emit('close', $event)"
    tabindex="-1"
    :class="cn('outline-none backdrop:hidden', $props.class)"
  >
    <slot></slot>
  </dialog>
</template>
