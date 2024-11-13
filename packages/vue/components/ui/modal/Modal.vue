<script lang="ts">
import { ModalContent, ModalTransition, useBackdrop, useToggle } from '@verus-ui/common'

export interface ModalProps {
  width?: string
}

export interface ModalSlots {
  trigger(props: { open: () => void }): any
  default(props: { close: () => void }): any
}

export interface ModalModel {
  modelValue?: boolean
}
</script>

<script setup lang="ts">
const { width = '24rem' } = defineProps<ModalProps>()

const { show, hide } = useBackdrop({ class: 'duration-300', onClick: () => close() })

const modelValue = defineModel<ModalModel['modelValue']>()

const {
  on: open,
  off: close,
  state
} = useToggle({
  modelValue,
  beforeSetTrue: () => show(),
  afterSetFalse: () => hide()
})

defineEmits<{ close: [evt: Event] }>()

defineSlots<ModalSlots>()
</script>

<template>
  <slot name="trigger" :="{ open }"></slot>

  <ModalTransition
    enterFromClass="scale-110 opacity-0"
    leaveToClass="scale-110 opacity-0"
    enterActiveClass="ease-braking"
    leaveActiveClass="ease-braking"
  >
    <ModalContent
      v-model="state"
      :style="{ width }"
      class="fixed inset-0 z-50 m-auto rounded-v2 border-none bg-bsc p-6 text-sm/6 text-on-bsc backdrop-blur-lg transition duration-300"
    >
      <slot :="{ close }"></slot>
    </ModalContent>
  </ModalTransition>
</template>
