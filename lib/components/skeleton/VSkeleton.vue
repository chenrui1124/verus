<script setup lang="ts">
import { ref } from 'vue'
import VSkeletonSidebar from './include/VSkeletonSidebar.vue'
import VSkeletonSidebarSwitch from './include/VSkeletonSidebarSwitch.vue'

defineOptions({ name: 'Skeleton' })

const sidebarOpen = ref<-1 | 0 | 1>(-1)

const skeleton = ref<HTMLElement>()

let toggleSidebar = () => {
  sidebarOpen.value = parseInt(
    getComputedStyle(skeleton.value!).getPropertyValue('--sidebar-init')
  ) as 0 | 1

  toggleSidebar = () => {
    sidebarOpen.value = ((sidebarOpen.value! + 1) % 2) as 0 | 1
  }

  toggleSidebar()
}

defineSlots<{
  sidebar(props: void): any
  default(props: void): any
}>()
</script>

<template>
  <div
    :class="[
      'flex h-dvh w-screen bg-bsc text-sm text-on-bsc transition-colors duration-300 max-sm:overflow-x-hidden',
      $style['v-skeleton']
    ]"
    ref="skeleton"
  >
    <VSkeletonSidebar v-if="$slots.sidebar" v-model="sidebarOpen">
      <slot name="sidebar" />
    </VSkeletonSidebar>

    <div
      :class="[
        'relative z-10 flex flex-1 flex-col bg-bsc transition-all duration-300 max-sm:before:v-shade max-sm:before:transition-all max-sm:before:duration-300 sm:before:pointer-events-none',
        {
          'max-sm:translate-x-[calc(100vw_-_6rem)] max-sm:before:bg-on-bsc/12 max-sm:before:backdrop-blur-sm':
            $slots.sidebar && sidebarOpen == 1
        }
      ]"
    >
      <VSkeletonSidebarSwitch v-if="$slots.sidebar" @click="toggleSidebar" :sidebar-open="sidebarOpen" />

      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<style module>
@media (min-width: 640px) {
  .v-skeleton {
    --sidebar-init: 1;
  }
}

@media not all and (min-width: 640px) {
  .v-skeleton {
    --sidebar-init: 0;
  }
}
</style>
