<script setup lang="ts">
import { computed, ref } from 'vue'
import { VSwitch } from '..'
import { VButton } from '.'

const loading = ref()

const variant = ['solid', 'tonal', 'outlined', 'clean'] as const

const value = ref()

const icon = computed(() =>
  value.value ? 'i-solar:archive-up-minimlistic-bold-duotone' : undefined
)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <VButton
        v-for="v in variant"
        :variant="v"
        text="button"
        uppercase
        :icon
        @click="loading = !loading"
        :tooltip="{ content: 'Button', danger: true }"
      />
    </div>

    <div class="flex gap-4">
      <VButton
        v-for="v in variant"
        :variant="v"
        text="button"
        uppercase
        danger
        :append-icon="icon"
      />
    </div>

    <div class="flex gap-4">
      <VButton v-for="v in variant" :variant="v" text="button" uppercase disabled />
    </div>

    <div class="flex gap-4">
      <VButton v-for="v in variant" :icon :variant="v" text="button" uppercase :loading danger />
    </div>

    <div class="flex gap-4">
      <VSwitch v-model="value" />
    </div>
  </div>
</template>
