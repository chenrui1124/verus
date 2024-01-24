<script setup lang="ts">
import { reactive } from 'vue'
import { VSegmentedButton, VSwitch } from '..'
import { VButton } from '.'

const props = reactive({
  variant: 'outlined',
  danger: void 0,
  loading: void 0,
  disabled: void 0,
  uppercase: void 0,
  icon: void 0,
  appendIcon: void 0
} as const)

const icon = 'i-ri-square-fill'
</script>

<template>
  <div class="rounded-v3 border-otl v-border">
    <div class="flex items-center justify-center p-4">
      <VButton
        :variant="props.variant"
        :danger="props.danger"
        :loading="props.loading"
        :disabled="props.disabled"
        :uppercase="props.uppercase"
        :icon="props.icon ? icon : void 0"
        :append-icon="props.appendIcon ? icon : void 0"
      >
        Button
      </VButton>
    </div>
    <div
      style="grid-template-columns: auto 1fr"
      class="grid items-center gap-4 border-0 border-t-v1 border-solid border-inherit p-4 text-sm text-on-bsc"
    >
      <span>Variant</span>
      <div>
        <VSegmentedButton :each="['solid', 'tonal', 'outlined', 'clean']" v-model="props.variant" />
      </div>

      <span>Danger</span>
      <div>
        <VSwitch v-model="props.danger" />
      </div>

      <span>Loading</span>
      <div>
        <VSwitch v-model="props.loading" />
      </div>

      <span>Disabled</span>
      <div>
        <VSwitch v-model="props.disabled" />
      </div>

      <span>Uppercase</span>
      <div>
        <VSwitch v-model="props.uppercase" />
      </div>

      <span>Icon</span>
      <div>
        <VSwitch v-model="props.icon" />
      </div>

      <span>Append Icon</span>
      <div>
        <VSwitch v-model="props.appendIcon" />
      </div>
    </div>
  </div>
</template>
