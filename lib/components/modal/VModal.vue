<script setup lang="ts">
import type { ModalProps } from '.'

import { useMask, useVisible } from '@composable'
import { vShortcut } from '@directives'

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
  <slot name="trigger" v-bind="{ open }" />

  <Teleport to="body">
    <Transition
      enter-from-class="-translate-y-[calc(50%_+_32vh)] grid-rows-[0fr] py-0 [&_>_div]:py-0"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-to-class="-translate-y-[calc(50%_+_32vh)] grid-rows-[0fr] py-0 [&_>_div]:py-0"
      enter-active-class="select-none [&_.v-modal\_\_content]:overflow-y-hidden"
      leave-active-class="select-none [&_.v-modal\_\_content]:overflow-y-hidden"
    >
      <!--* Modal Wrapper *-->
      <div
        v-if="visible"
        v-shortcut="shortcut && ['escape', close]"
        :style="{ width }"
        style="
          max-height: calc(100vh - 8vmin);
          max-height: calc(100dvh - 8vmin);
          max-width: calc(100vw - 8vmin);
        "
        class="fixed inset-x-0 top-1/2 z-30 mx-auto grid -translate-y-1/2 grid-cols-1 rounded-v3 p-3 transition-all duration-700 ease-braking"
        :class="!danger ? 'bg-pri-ctr' : 'bg-err-ctr'"
      >
        <!--* Modal *-->
        <div
          style="max-height: calc(100dvh - 3rem - 8vmin)"
          class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 transition-all duration-inherit ease-inherit"
        >
          <!--* Title *-->
          <div v-if="title" class="text-2xl duration-300" :class="danger ? 'text-err' : 'text-pri'">
            {{ title }}
          </div>
          <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl duration-300">
            {{ subtitle }}
          </div>

          <!--* Content *-->
          <div
            v-if="$slots.default && visible"
            class="v-modal__content flex-0 overflow-y-auto text-sm leading-6 text-on-bsc duration-300"
          >
            <slot v-bind="{ close, closeWith }" />
          </div>

          <!--* Actions *-->
          <div v-if="$slots.actions" class="flex justify-end gap-inherit">
            <slot name="actions" v-bind="{ close, closeWith }" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
