<script setup lang="ts">
import type { ModalProps } from '.'

import { computed } from 'vue'
import { useMask, useVisible } from '@composable'
import { vShortcut } from '@directives'

defineOptions({ name: 'Modal' })

const { width = '28rem', danger } = defineProps<ModalProps>()

const { show, hide } = useMask()

const { visible, open, close, closeWith } = useVisible({
  beforeOpen: show,
  beforeClose: hide
})

const _danger = computed(() => (danger ? '' : void 0))

defineExpose({ open, close, closeWith })

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
      enter-from-class="-translate-y-[32vh] grid-rows-[0fr] py-0 *:py-0"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-to-class="-translate-y-[32vh] grid-rows-[0fr] py-0 *:py-0"
      enter-active-class="select-none [&_[data-content]]:overflow-y-hidden"
      leave-active-class="select-none [&_[data-content]]:overflow-y-hidden"
    >
      <!--* Modal Wrapper *-->
      <dialog
        open
        v-if="visible"
        v-shortcut="shortcut && ['escape', close]"
        :data-danger="_danger"
        :style="{ width }"
        style="
          max-width: calc(100vw - 8vmin);
          max-height: calc(100vh - 8vmin);
          max-height: calc(100dvh - 8vmin);
        "
        class="fixed inset-0 z-30 m-auto grid grid-cols-1 rounded-v3 border-none bg-pri-ctr p-3 transition-all duration-700 ease-braking data-[danger]:bg-err-ctr"
      >
        <!--* Modal *-->
        <div
          style="max-height: calc(100dvh - 3rem - 8vmin)"
          class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 text-sm transition-all duration-inherit ease-inherit *:duration-inherit *:ease-inherit"
        >
          <!--* Title *-->
          <div v-if="title" :data-danger="_danger" class="text-2xl text-pri data-[danger]:text-err">
            {{ title }}
          </div>
          <div v-if="subtitle" class="-mt-2 pl-px text-otl">
            {{ subtitle }}
          </div>

          <!--* Content *-->
          <div v-if="$slots.default" data-content class="overflow-y-auto leading-6 text-on-bsc">
            <slot v-bind="{ close, closeWith }" />
          </div>

          <!--* Actions *-->
          <div v-if="$slots.actions" class="flex justify-end gap-inherit">
            <slot name="actions" v-bind="{ close, closeWith }" />
          </div>
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
