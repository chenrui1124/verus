<script setup lang="ts">
import { reactive } from 'vue'
import { lorem } from 'mm3'
import { VSegmentedButton, VSwitch, VTextField } from '..'
import { VAccordion } from '.'

const props = reactive({
  variant: 'outlined',
  danger: void 0,
  width: '24rem'
} as const)
</script>

<template>
  <div class="rounded-v3 border-otl v-border *:p-4">
    <div class="flex items-center justify-center">
      <VAccordion
        title="折叠面板"
        :width="props.width"
        :variant="props.variant"
        :danger="props.danger"
      >
        {{ lorem('sc') }}
      </VAccordion>
    </div>

    <div
      style="grid-template-columns: auto 1fr"
      class="grid items-center gap-4 border-0 border-t-v1 border-solid border-inherit p-4 text-sm text-on-bsc"
    >
      <span>Variant</span>
      <div class="border-0 border-t-v1 border-inherit">
        <VSegmentedButton :each="['solid', 'outlined']" v-model="props.variant" />
      </div>

      <span>Danger</span>
      <div>
        <VSwitch v-model="props.danger" />
      </div>

      <span>Width</span>
      <div>
        <VTextField v-model="props.width" />
      </div>
    </div>
  </div>
</template>
