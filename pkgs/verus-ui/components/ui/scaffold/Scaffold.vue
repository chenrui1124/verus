<script setup lang="ts">
import type { ScaffoldSlots } from '.'

import { ref } from 'vue'
import { withPrefix } from '@verus-ui/common'
import { ScaffoldSidebar, ScaffoldSidebarSwitch } from './include'

defineOptions({ name: withPrefix('Scaffold') })

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

defineSlots<ScaffoldSlots>()
</script>

<template>
  <div
    data-name="Scaffold"
    ref="scaffold"
    class="flex h-dvh w-screen bg-bsc text-sm text-on-bsc transition-colors duration-300 max-sm:overflow-x-hidden"
  >
    <ScaffoldSidebar v-if="$slots.sidebar" v-model="sidebarOpen">
      <slot name="sidebar"></slot>
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
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style>
@media (min-width: 640px) {
  [data-name='Scaffold'] {
    --sidebar-init: 1;
  }
}

@media not all and (min-width: 640px) {
  [data-name='Scaffold'] {
    --sidebar-init: 0;
  }
}
</style>
