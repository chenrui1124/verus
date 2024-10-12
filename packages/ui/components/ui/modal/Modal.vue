<script setup lang="ts">
import type { ModalProps, ModalSlots } from '.'

import { BasicModal, useOverlay, useVisible, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('Modal') })

const { width = '24rem' } = defineProps<ModalProps>()

const { showOverlayWithListener, hideOverlay } = useOverlay('duration-300')

const { state, show, hide } = useVisible({
  onBeforeShow: () => showOverlayWithListener(hide),
  onBeforeClose: hideOverlay
})

defineSlots<ModalSlots>()
</script>

<template>
  <slot name="trigger" v-bind="{ show }" />

  <BasicModal
    :state
    @cancel="hide"
    enterFromClass="scale-110 opacity-0"
    leaveToClass="scale-110 opacity-0"
    enterActiveClass="ease-braking"
    leaveActiveClass="ease-braking"
    :style="{ width }"
    class="fixed inset-0 z-50 m-auto rounded-v2 border-none bg-bsc p-6 text-sm/6 text-on-bsc backdrop-blur-lg transition duration-300"
  >
    <slot v-bind="{ hide }" />
  </BasicModal>
</template>
