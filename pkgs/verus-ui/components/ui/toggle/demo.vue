<script setup lang="ts">
import { ref } from 'vue'
import { VToggle } from '.'

const i = ref()
</script>

<template>
  <div class="flex gap-4">
    <VToggle v-model="i" icon="i-ri:24-hours-fill" value="Center"/>
    <VToggle v-model="i" :icon="['i-ri-menu-2-fill', 'i-ri-menu-fold-3-line']">Fold</VToggle>
  </div>
</template>
