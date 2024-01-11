<script setup lang="ts">
import { VSwitch } from 'verus-ui'
import { watchEffect } from 'vue'
import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()

watchEffect(() =>
  isDark.value
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
)
</script>

<template>
  <div
    class="flex h-dvh w-screen items-center justify-center bg-bsc text-on-bsc transition-colors duration-300"
  >
    <RouterView />
    <div class="fixed right-4 top-4">
      <VSwitch v-model="isDark" />
    </div>
  </div>
</template>
