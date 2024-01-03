<script setup lang="ts">
import { usePreferredDark } from '@vueuse/core'
import { VSwitch } from '@components'
import { watchEffect } from 'vue'

const isDark = usePreferredDark()

watchEffect(() =>
  isDark.value
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
)
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-bsc text-on-bsc transition-colors duration-300"
  >
    <RouterView />

    <Teleport to="body">
      <div class="fixed right-2 top-2">
        <VSwitch v-model="isDark" />
      </div>
    </Teleport>
  </div>
</template>
