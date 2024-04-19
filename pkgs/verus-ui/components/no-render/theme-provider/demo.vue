<script setup lang="ts">
import type { ThemeProviderProps } from '@verus-ui/components'

import { ref } from 'vue'

const theme = ref<ThemeProviderProps['theme']>('auto')
</script>

<template>
  <VThemeProvider :theme="theme">
    <VSegmentedButton :each="['auto', 'light', 'dark']" v-model="theme" />
  </VThemeProvider>
</template>
