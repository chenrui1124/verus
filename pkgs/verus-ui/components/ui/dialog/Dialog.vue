<script setup lang="ts">
import type { DialogProps, DialogSlots } from '.'

import { BaseModal, htmlAttribute, useOverlay, useVisible, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Dialog') })

const { width = '28rem', danger } = defineProps<DialogProps>()

const { showOverlay, hideOverlay } = useOverlay()

const modelValue = defineModel<boolean | undefined>()

const { state, show, hide, withHide } = useVisible({
  model: modelValue,
  onBeforeShow: showOverlay,
  onBeforeClose: hideOverlay
})

defineExpose({ show, hide, withHide })

defineEmits<{ close: [evt?: Event] }>()

defineSlots<DialogSlots>()
</script>

<template>
  <slot name="trigger" v-bind="{ show }" />

  <BaseModal
    :state
    @cancel="hide"
    @close="$emit('close', $event)"
    :data-danger="htmlAttribute(danger)"
    layer
    enterFromClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
    enterToClass="grid-rows-[1fr]"
    leaveFromClass="grid-rows-[1fr]"
    leaveToClass="-translate-y-[44vh] grid-rows-[0fr] py-0 *:py-0"
    enterActiveClass="select-none duration-700 [&_[data-name=DialogContent]]:!overflow-y-hidden"
    leaveActiveClass="select-none [&_[data-name=DialogContent]]:!overflow-y-hidden"
    :style="{ width }"
    style="
      max-width: calc(100vw - 8vmin);
      max-height: calc(100vh - 8vmin);
      max-height: calc(100dvh - 8vmin);
    "
    class="group/dialog fixed inset-0 z-40 m-auto grid grid-cols-1 rounded-v3 border-none bg-pri-ctr p-2 transition-all duration-500 ease-braking data-[danger]:bg-err-ctr"
  >
    <div
      style="max-height: calc(100dvh - 3rem - 8vmin)"
      class="flex flex-col gap-4 overflow-y-hidden rounded-v2 p-3 text-sm transition-all duration-inherit ease-inherit *:duration-inherit *:ease-inherit"
    >
      <!--* Title *-->
      <component
        :is="title && 'div'"
        class="p-1 text-2xl text-pri group-data-[danger]/dialog:text-err"
      >
        {{ title }}
      </component>
      <component :is="subtitle && 'div'" class="-mt-2 px-1 text-otl">
        {{ subtitle }}
      </component>

      <!--* Content *-->
      <component
        :is="$slots.default && 'div'"
        data-name="DialogContent"
        class="overflow-y-auto p-1 leading-6 text-on-bsc"
      >
        <slot v-bind="{ hide, withHide }"></slot>
      </component>

      <!--* Actions *-->
      <component
        :is="$slots.actions && 'div'"
        class="flex justify-end gap-inherit p-1 focus:[&_button]:v-outline focus:data-[danger]:[&_button]:v-outline-danger"
      >
        <slot name="actions" v-bind="{ hide, withHide }"></slot>
      </component>
    </div>
  </BaseModal>
</template>
