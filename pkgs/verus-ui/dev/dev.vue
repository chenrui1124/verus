<script setup lang="ts">
import { ref, watch } from 'vue'

const theme = ref('auto')

watch(theme, () => (document.documentElement.dataset.theme = theme.value), { immediate: true })
</script>

<template>
  <div class="absolute inset-0 overflow-y-auto bg-bsc text-on-bsc transition-colors duration-300">
    <div class="box-border flex min-h-dvh w-full items-center justify-center">
      <RouterView />
    </div>

    <Teleport to="body">
      <div class="fixed right-2 top-2 z-10">
        <VSegmentedButton :each="['light', 'dark', 'auto']" v-model="theme" />
      </div>

      <div class="fixed left-2 top-2 flex flex-col gap-1 text-sm text-pri">
        <RouterLink v-for="i in $router.options.routes" :to="i.path">{{ i.name }}</RouterLink>
      </div>
    </Teleport>
  </div>
</template>

<style>
body {
  @apply m-0 p-0;
}
</style>
