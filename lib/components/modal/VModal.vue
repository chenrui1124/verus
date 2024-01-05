<script setup lang="ts">
import type { ModalProps } from '.'

import { useMask, useVisible } from '@composable'

defineOptions({ name: 'Modal' })

const { width = '28rem' } = defineProps<ModalProps>()

const { show, hide } = useMask()

const { visible, open, close, closeWith } = useVisible({
  beforeOpen: show,
  beforeClose: hide
})

defineSlots<{
  trigger(props: { open: typeof open }): any
  default(props: { close: typeof close; closeWith: typeof closeWith }): any
  actions(props: { close: typeof close; closeWith: typeof closeWith }): any
}>()
</script>

<template>
  <slot name="trigger" v-bind="{ open }"></slot>

  <Teleport to="body">
    <Transition
      enter-from-class="-translate-y-[calc(50%_+_32vh)] grid-rows-[0fr] py-0 [&_>_div]:py-0"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-to-class="-translate-y-[calc(50%_+_32vh)] grid-rows-[0fr] py-0 [&_>_div]:py-0"
      enter-active-class="[&_.v-modal\_\_content]:overflow-y-hidden"
      leave-active-class="[&_.v-modal\_\_content]:overflow-y-hidden"
    >
      <!--* Modal Wrapper *-->
      <div
        v-if="visible"
        :style="{ width, maxHeight: '88dvh', maxWidth: '88dvw' }"
        class="fixed inset-x-0 top-1/2 z-30 mx-auto grid -translate-y-1/2 grid-cols-1 rounded-v3 p-3 transition-all duration-700 ease-braking"
        :class="!danger ? 'bg-nrm-var' : 'bg-err-ctr-var'"
      >
        <!--* Modal *-->
        <div
          style="max-height: calc(88dvh - 1.5rem)"
          class="flex flex-col gap-6 overflow-y-hidden rounded-v2 p-3 transition-all duration-inherit ease-braking"
        >
          <!--* Title *-->
          <div v-if="title || subtitle" class="flex flex-col gap-4">
            <div v-if="title" class="text-xl" :class="danger ? 'text-err' : 'text-pri'">
              {{ title }}
            </div>
            <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">{{ subtitle }}</div>
          </div>

          <!--* Content *-->
          <div
            v-if="$slots.default && visible"
            class="v-modal__content flex-0 overflow-y-auto text-sm leading-6 text-on-bsc"
          >
            <slot v-bind="{ close, closeWith }" />
          </div>

          <!--* Actions *-->
          <div v-if="$slots.actions" class="flex justify-end gap-6">
            <slot name="actions" v-bind="{ close, closeWith }" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
