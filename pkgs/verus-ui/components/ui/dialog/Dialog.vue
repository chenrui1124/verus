<script setup lang="ts">
import type { DialogProps } from '.'

import { boolAttr, useOverlay, useVisible } from '@verus-ui/common'

const { width = '28rem', danger } = defineProps<DialogProps>()

const { showOverlay, hideOverlay } = useOverlay()

const modelValue = defineModel<boolean | undefined>()

const { state, show, hide, withHide } = useVisible({
  model: modelValue,
  onBeforeShow: showOverlay,
  onBeforeClose: hideOverlay
})

defineExpose({ show, hide, withHide })

defineEmits<{ close: [evt: Event] }>()

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
      @afterLeave="el => void (el as HTMLDialogElement).close()"
      enterFromClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
      enterToClass="grid-rows-[1fr]"
      leaveFromClass="grid-rows-[1fr]"
      leaveToClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
      enterActiveClass="select-none [&_[data-dialog-content]]:!overflow-y-hidden"
      leaveActiveClass="select-none [&_[data-dialog-content]]:!overflow-y-hidden"
    >
      <!--* Dialog Wrapper *-->
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
        class="group/v-dialog fixed inset-0 z-30 m-auto grid grid-cols-1 rounded-v3 border-none bg-pri-ctr p-2 outline-none transition-all duration-700 ease-braking backdrop:hidden data-[danger]:bg-err-ctr"
      >
        <!--* Dialog *-->
        <div
          style="max-height: calc(100dvh - 3rem - 8vmin)"
          class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 text-sm transition-all duration-inherit ease-inherit *:duration-inherit *:ease-inherit"
        >
          <!--* Title *-->
          <component
            :is="title && 'div'"
            class="p-1 text-2xl text-pri group-data-[danger]/v-dialog:text-err"
          >
            {{ title }}
          </component>
          <div v-if="subtitle" class="-mt-2 px-1 text-otl">
            {{ subtitle }}
          </div>

          <!--* Content *-->
          <div
            v-if="$slots.default"
            data-dialog-content
            class="overflow-y-auto p-1 leading-6 text-on-bsc"
          >
            <slot v-bind="{ hide, withHide }" />
          </div>

          <!--* Actions *-->
          <div
            v-if="$slots.actions"
            class="flex justify-end gap-inherit p-1 focus-visible:[&_button]:v-outline focus-visible:data-[danger]:[&_button]:v-outline-danger"
          >
            <slot name="actions" v-bind="{ hide, withHide }" />
          </div>
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
