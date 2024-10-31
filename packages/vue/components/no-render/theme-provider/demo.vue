<script setup lang="ts">
import type { ThemeProviderModel } from '.'

import { ref } from 'vue'

const theme = ref<ThemeProviderModel['theme']>('auto')
</script>

<template>
  <VThemeProvider v-model:theme="theme" tag="div">
    <VSegmentedButton :each="['auto', 'light', 'dark']" v-model="theme" />
  </VThemeProvider>
</template>
