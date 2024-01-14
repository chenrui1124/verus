<script setup lang="ts">
import { ref } from 'vue'
import { VTextField } from '.'

const modelValue = ref()
</script>

<template>
  <div class="flex flex-col gap-4">
    <VTextField v-model="modelValue" icon="i-ri-key-2-fill" clearable/>
    <VTextField v-model="modelValue" icon="i-ri-key-2-fill" clearable variant="solid" />
  </div>
</template>
