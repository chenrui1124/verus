<script setup lang="ts">
import type { ScaffoldProps } from '.'

import { reactive, ref } from 'vue'
import { ScaffoldSidebarResizer } from './include'

defineProps<ScaffoldProps>()

const sidebar = reactive({
  width: 288,
  active: -1
})

const scaffold = ref<HTMLElement>()

let changeSidebarActive = () => {
  sidebar.active = parseInt(
    getComputedStyle(scaffold.value!).getPropertyValue('--sidebar-active-init')
  ) as 0 | 1

  changeSidebarActive = () => void (sidebar.active = (sidebar.active + 1) % 2)

  changeSidebarActive()
}

const toggling = ref(false)

function toggleSidebar(...args: [newValueOrNot?: boolean | Event]) {
  if (args[0] && typeof args[0] != 'object') {
    toggling.value = true
    requestAnimationFrame(() => void (sidebar.active = args[0] ? 1 : 0))
  } else {
    toggling.value = true
    requestAnimationFrame(() => void changeSidebarActive())
  }
}

function onTransitionEnd() {
  toggling.value = false
}

defineSlots<{
  header(props: { toggleSidebar: typeof toggleSidebar }): any
  sidebar(props: { toggleSidebar: typeof toggleSidebar }): any
  default(props: { toggleSidebar: typeof toggleSidebar }): any
}>()
</script>

<template>
  <div
    ref="scaffold"
    @transitionend="onTransitionEnd"
    :style="{
      gridTemplateAreas: [
        $slots.sidebar
          ? `'${[$slots.sidebar ? 'header' : void 0, resizable ? 'header' : void 0, 'header'].join(' ')}'`
          : void 0,
        `'${[$slots.sidebar ? 'sidebar' : void 0, resizable ? 'resizer' : void 0, 'body'].join(' ')}'`
      ].join(''),
      gridTemplateRows: [$slots.header ? 'auto' : void 0, '1fr'].join(' '),
      '--sm-grid-cols': [
        $slots.sidebar ? (sidebar.active ? 'var(--sidebar-width)' : '0') : void 0,
        resizable ? '0' : void 0,
        '1fr'
      ].join(' '),
      '--max-sm-grid-cols': `${$slots.sidebar ? '0' : ''} ${resizable ? '0' : ''} 1fr`,
      '--sidebar-width': $slots.sidebar ? `${sidebar.width}px` : void 0
    }"
    :class="[
      'grid h-dvh w-screen text-sm/6 max-sm:overflow-x-hidden',
      'max-sm:grid-cols-[var(--max-sm-grid-cols)] max-sm:[--sidebar-active-init:0] sm:grid-cols-[var(--sm-grid-cols)] sm:[--sidebar-active-init:1]',
      { 'transition-all duration-500 ease-braking': toggling }
    ]"
  >
    <header
      v-if="$slots.header"
      :style="{ gridArea: 'header' }"
      :class="[
        'flex h-14 items-center gap-3 bg-pri-ctr px-3 transition duration-500 ease-braking',
        { 'max-sm:translate-x-[var(--sidebar-width)] max-sm:brightness-75': sidebar.active === 1 }
      ]"
    >
      <slot name="header" v-bind="{ toggleSidebar }"></slot>
    </header>

    <div
      v-if="$slots.sidebar"
      :style="{ gridArea: 'sidebar' }"
      class="overflow-x-hidden sm:border-0 sm:border-r-1.2 sm:border-solid sm:border-otl-var"
    >
      <div
        @click="toggleSidebar"
        :class="['fixed inset-0 z-10 sm:hidden', { hidden: sidebar.active !== 1 }]"
      ></div>

      <aside
        :style="{ width: 'var(--sidebar-width)' }"
        :class="[
          'box-border h-full overflow-y-auto bg-bsc p-3 transition duration-500 ease-braking max-sm:fixed max-sm:inset-y-0 max-sm:left-0 max-sm:z-10 max-sm:border-0 max-sm:border-r-1.2 max-sm:border-solid max-sm:border-otl-var',
          { 'max-sm:-translate-x-full': sidebar.active === 0 || sidebar.active === -1 }
        ]"
      >
        <slot name="sidebar" v-bind="{ toggleSidebar }"></slot>
      </aside>
    </div>

    <ScaffoldSidebarResizer
      v-model:width="sidebar.width"
      class="sticky top-0 z-10 -mx-1 w-2 cursor-ew-resize max-sm:pointer-events-none"
    />

    <main
      :style="{ gridArea: 'body' }"
      :class="[
        'overflow-y-auto bg-bsc p-3 transition duration-500 ease-braking',
        { 'max-sm:translate-x-[var(--sidebar-width)] max-sm:brightness-75': sidebar.active === 1 }
      ]"
    >
      <slot v-bind="{ toggleSidebar }"></slot>
    </main>
  </div>
</template>
