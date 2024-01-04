<script setup lang="ts">
import { ref } from 'vue'
import { VSwitch } from '.'

const value = ref(true)

const value2 = ref()
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2 font-mono">
      <span>{{ `${value}` }}</span>
      <span>{{ `${value2}` }}</span>
    </div>

    <div class="flex gap-4">
      <VSwitch v-model="value" />
      <VSwitch v-model="value2" />
      <VSwitch v-model="value" disabled />
    </div>
  </div>
</template>
