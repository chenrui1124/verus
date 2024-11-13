<script lang="ts">
import {
  htmlAttribute,
  ModalContent,
  ModalTransition,
  useBackdrop,
  useToggle,
  withPrefix
} from '@verus-ui/common'

export interface DialogProps {
  danger?: boolean
  subtitle?: string
  title?: string
  /**
   * @default '28rem'
   */
  width?: string
}

export interface DialogModel {
  modelValue?: boolean
}

export interface DialogSlots {
  trigger: (props: { open: () => void }) => any
  default: (props: { close: () => void; withClose: () => void }) => any
  actions: (props: { close: () => void; withClose: () => void }) => any
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('Dialog') })

const { width = '28rem', danger } = defineProps<DialogProps>()

const { show, hide } = useBackdrop()

const modelValue = defineModel<DialogModel['modelValue']>()

const {
  state,
  on: open,
  off: close,
  withOff: withClose
} = useToggle({
  modelValue,
  beforeSetTrue: () => show(),
  afterSetFalse: () => hide()
})

defineEmits<{
  cancel: [evt: Event]
  close: [evt: Event]
}>()

defineSlots<DialogSlots>()
</script>

<template>
  <slot name="trigger" :="{ open }"></slot>

  <ModalTransition
    layer
    enterFromClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
    enterToClass="grid-rows-[1fr]"
    leaveFromClass="grid-rows-[1fr]"
    leaveToClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
    enterActiveClass="select-none duration-700 [&_[data-name=DialogContent]]:!overflow-y-hidden"
    leaveActiveClass="select-none [&_[data-name=DialogContent]]:!overflow-y-hidden"
  >
    <ModalContent
      v-model="state"
      @close="$emit('close', $event)"
      :data-danger="htmlAttribute(danger)"
      :style="{ width }"
      style="
        max-width: calc(100vw - 8vmin);
        max-height: calc(100vh - 8vmin);
        max-height: calc(100dvh - 8vmin);
      "
      class="group/dialog fixed inset-0 z-40 m-auto grid grid-cols-1 rounded-v3 border-none bg-pri-ctr p-2 transition-all duration-500 ease-braking"
    >
      <div
        style="max-height: calc(100dvh - 3rem - 8vmin)"
        class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 text-sm transition-all duration-inherit ease-inherit *:duration-inherit *:ease-inherit"
      >
        <!--* Title *-->
        <div v-if="title" class="p-1 text-2xl text-pri">{{ title }}</div>
        <div v-if="subtitle" class="-mt-2 px-1 text-otl">{{ subtitle }}</div>

        <!--* Content *-->
        <div
          v-if="$slots.default"
          data-name="DialogContent"
          class="overflow-y-auto p-1 leading-6 text-on-bsc"
        >
          <slot :="{ close, withClose }"></slot>
        </div>

        <!--* Actions *-->
        <div
          v-if="$slots.actions"
          class="flex flex-row-reverse justify-start gap-inherit p-1 focus:[&_button]:v-outline"
        >
          <slot name="actions" :="{ close, withClose }"></slot>
        </div>
      </div>
    </ModalContent>
  </ModalTransition>
</template>
