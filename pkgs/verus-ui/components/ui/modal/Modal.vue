<script setup lang="ts">
import type { ModalProps } from '.'

import { BaseModal, useOverlay, useVisible } from '@verus-ui/common'

const { width = '24rem' } = defineProps<ModalProps>()

const { showOverlayWithListener, hideOverlay } = useOverlay('duration-300')

const { state, show, hide } = useVisible({
  onBeforeShow: () => showOverlayWithListener(hide),
  onBeforeClose: hideOverlay
})

defineSlots<{
  trigger(props: { show: typeof show }): any
  default(props: { hide: typeof hide }): any
}>()
</script>

<template>
  <slot name="trigger" v-bind="{ show }" />

  <BaseModal
    :state
    disableTopLayer
    @cancel="hide"
    enterFromClass="scale-90 opacity-0"
    leaveToClass="scale-90 opacity-0"
    :style="{ width }"
    class="fixed inset-0 z-50 m-auto rounded-v2 border-none bg-bsc p-6 text-sm/6 text-on-bsc transition duration-300 backdrop:hidden"
  >
    <slot v-bind="{ hide }" />
  </BaseModal>
</template>
