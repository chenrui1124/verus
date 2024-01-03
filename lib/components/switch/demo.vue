<script setup lang="ts">
import { ref } from 'vue'
import { VSwitch } from '.'

const value = ref(true)
</script>

<template>
  <div class="flex gap-4">
    <VSwitch v-model="value" />
    <VSwitch v-model="value" disabled />
  </div>
</template>
