<script setup lang="ts">
import { ref } from 'vue'
import ScaffoldSidebar from './include/ScaffoldSidebar.vue'
import ScaffoldSidebarSwitch from './include/ScaffoldSidebarSwitch.vue'

const sidebarOpen = ref<-1 | 0 | 1>(-1)

const scaffold = ref<HTMLElement>()

let toggleSidebar = () => {
  sidebarOpen.value = parseInt(
    getComputedStyle(scaffold.value!).getPropertyValue('--sidebar-init')
  ) as 0 | 1

  toggleSidebar = () => {
    sidebarOpen.value = ((sidebarOpen.value! + 1) % 2) as 0 | 1
  }

  toggleSidebar()
}

defineSlots<{
  sidebar(): any
  default(): any
}>()
</script>

<template>
  <div
    :class="[
      'flex h-dvh w-screen bg-bsc text-sm text-on-bsc transition-colors duration-300 max-sm:overflow-x-hidden',
      $style['v-scaffold']
    ]"
    ref="scaffold"
  >
    <ScaffoldSidebar v-if="$slots.sidebar" v-model="sidebarOpen">
      <slot name="sidebar" />
    </ScaffoldSidebar>

    <div
      :class="[
        'relative z-10 flex flex-1 flex-col bg-bsc transition-all duration-300 max-sm:before:v-shade max-sm:before:transition-all max-sm:before:duration-300 sm:before:pointer-events-none',
        {
          'max-sm:translate-x-[calc(100vw_-_6rem)] max-sm:before:bg-on-bsc/12 max-sm:before:backdrop-blur-sm':
            $slots.sidebar && sidebarOpen == 1
        }
      ]"
    >
      <ScaffoldSidebarSwitch
        v-if="$slots.sidebar"
        @click="toggleSidebar"
        :sidebar-open="sidebarOpen"
      />

      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<style module>
@media (min-width: 640px) {
  .v-scaffold {
    --sidebar-init: 1;
  }
}

@media not all and (min-width: 640px) {
  .v-scaffold {
    --sidebar-init: 0;
  }
}
</style>
