<script setup lang="ts">
import type { ModalProps } from '.'

import { BaseLayer, useOverlay, useVisible } from '@verus-ui/common'

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

  <BaseLayer
    :state
    @cancel="hide"
    disableTopLayer
    enterFromClass="scale-110 opacity-0"
    leaveToClass="scale-110 opacity-0"
    enterActiveClass="ease-braking"
    leaveActiveClass="ease-braking"
    :style="{ width }"
    class="fixed inset-0 z-50 m-auto rounded-v2 border-none bg-bsc p-6 text-sm/6 text-on-bsc transition duration-300"
  >
    <slot v-bind="{ hide }" />
  </BaseLayer>
</template>
