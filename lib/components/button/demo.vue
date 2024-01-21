<script setup lang="ts">
import { computed, ref } from 'vue'
import { VSwitch } from '..'
import { VButton } from '.'

const loading = ref()

const text = '按钮'

const variant = ['solid', 'tonal', 'outlined', 'clean'] as const

const value = ref()

const icon = computed(() => (value.value ? 'i-ri-square-fill' : undefined))
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <VButton
        v-for="v in variant"
        @click="loading = !loading"
        :variant="v"
        :text="text"
        :icon="icon"
        :tooltip="{ content: text }"
        uppercase
      />
    </div>

    <div class="flex gap-4">
      <VButton
        v-for="v in variant"
        :variant="v"
        :text="text"
        :append-icon="icon"
        uppercase
        danger
      />
    </div>

    <div class="flex gap-4">
      <VButton v-for="v in variant" :variant="v" :text="text" uppercase disabled />
    </div>

    <div class="flex gap-4">
      <VButton
        v-for="v in variant"
        :icon="icon"
        :variant="v"
        :text="text"
        :loading="loading"
        uppercase
        danger
      />
    </div>

    <div class="flex gap-4">
      <VSwitch v-model="value" />
    </div>
  </div>
</template>
