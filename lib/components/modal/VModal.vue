<script setup lang="ts">
import type { ModalProps } from '.'

import { useVisible } from '@composable'
import { useOverlay } from '@singleton'
import { boolAttr } from '@utils'

defineOptions({ name: 'Modal' })

const { width = '28rem', danger } = defineProps<ModalProps>()

const { showOverlay, hideOverlay } = useOverlay()

const { state, show, hide, withHide } = useVisible({
  onBeforeShow: showOverlay,
  onBeforeClose: hideOverlay
})

const emit = defineEmits<{ close: [e: Event] }>()

defineExpose({ show, hide, withHide })

defineSlots<{
  trigger(props: { show: typeof show }): any
  default(props: { hide: typeof hide; withHide: typeof withHide }): any
  actions(props: { hide: typeof hide; withHide: typeof withHide }): any
}>()
</script>

<template>
  <slot name="trigger" v-bind="{ show }" />

  <Teleport to="body">
    <Transition
      @enter="el => void (el as HTMLDialogElement).showModal()"
      @after-leave="el => void (el as HTMLDialogElement).close()"
      enter-from-class="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-to-class="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
      enter-active-class="select-none [&_[data-content]]:!overflow-y-hidden"
      leave-active-class="select-none [&_[data-content]]:!overflow-y-hidden"
    >
      <!--* Modal Wrapper *-->
      <dialog
        v-if="state"
        @close="$emit('close', $event)"
        @cancel="hide"
        :data-danger="boolAttr(danger)"
        :style="{ width }"
        style="
          max-width: calc(100vw - 8vmin);
          max-height: calc(100vh - 8vmin);
          max-height: calc(100dvh - 8vmin);
        "
        class="group/v-modal fixed inset-0 z-30 m-auto grid grid-cols-1 rounded-v3 border-none bg-pri-ctr p-2 transition-all duration-700 ease-braking backdrop:opacity-0 data-[danger]:bg-err-ctr"
      >
        <!--* Modal *-->
        <div
          style="max-height: calc(100dvh - 3rem - 8vmin)"
          class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 text-sm transition-all duration-inherit ease-inherit *:duration-inherit *:ease-inherit"
        >
          <!--* Title *-->
          <div v-if="title" class="p-1 text-2xl text-pri group-data-[danger]/v-modal:text-err">
            {{ title }}
          </div>
          <div v-if="subtitle" class="-mt-2 px-1 text-otl">
            {{ subtitle }}
          </div>

          <!--* Content *-->
          <div v-if="$slots.default" data-content class="overflow-y-auto p-1 leading-6 text-on-bsc">
            <slot v-bind="{ hide, withHide }" />
          </div>

          <!--* Actions *-->
          <div
            v-if="$slots.actions"
            class="flex justify-end gap-inherit p-1 focus:[&_button]:v-outline focus:data-[danger]:[&_button]:v-outline-danger"
          >
            <slot name="actions" v-bind="{ hide, withHide }" />
          </div>
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
