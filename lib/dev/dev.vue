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
  <div class="absolute inset-0 overflow-y-auto bg-bsc text-on-bsc transition-colors duration-300">
    <div class="box-border flex min-h-dvh w-full items-center justify-center">
      <RouterView />
    </div>

    <Teleport to="body">
      <div class="fixed right-2 top-2 z-10">
        <VSwitch v-model="isDark" />
      </div>
<!-- 
      <div class="fixed left-2 top-2 flex flex-col gap-1 text-sm text-pri">
        <RouterLink v-for="i in $router.options.routes" :to="i.path">{{ i.name }}</RouterLink>
      </div> -->
    </Teleport>
  </div>
</template>

<style>
body {
  @apply m-0 p-0;
}
</style>
