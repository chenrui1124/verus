<script lang="ts">
import { provide, reactive, ref } from 'vue'
import { scaffoldKey, withPrefix } from '@verus-ui/common'
import { ScaffoldSidebarResizer } from './include'

export interface ScaffoldProps {
  resizable?: boolean
}

export type ScaffoldSlots = {
  header(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
  sidebar(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
  default(props: { toggleSidebar: (newValueOrNone?: boolean | Event) => void }): any
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('Scaffold') })

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

function toggleSidebar(...args: [newValueOrNone?: boolean | Event]) {
  if (args[0] && typeof args[0] != 'object') {
    requestAnimationFrame(() => void (sidebar.active = args[0] ? 1 : 0))
  } else {
    requestAnimationFrame(() => void changeSidebarActive())
  }
}

const classes = ref('')

function appendClasses(value: string) {
  classes.value = value
}

function subtractClasses() {
  classes.value = ''
}

provide(scaffoldKey, { appendClasses, subtractClasses })

defineSlots<ScaffoldSlots>()
</script>

<template>
  <div class="h-dvh w-screen bg-black">
    <div :class="['size-full duration-500 ease-braking', classes]">
      <div
        ref="scaffold"
        style="transition-property: grid-template-columns, color, background-color"
        :style="{
          gridTemplateAreas: [
            $slots.sidebar
              ? `'${[$slots.sidebar ? 'header' : void 0, resizable ? 'header' : void 0, 'header'].join(' ')}'`
              : void 0,
            `'${[$slots.sidebar ? 'sidebar' : void 0, resizable ? 'resizer' : void 0, 'body'].join(' ')}'`
          ].join(''),
          gridTemplateRows: `${$slots.header ? 'auto' : ''} 1fr`,
          '--sm-grid-cols': `${$slots.sidebar ? (sidebar.active ? 'var(--sidebar-width)' : '0') : ''} ${resizable ? '0' : ''} 1fr`,
          '--max-sm-grid-cols': `${$slots.sidebar ? '0 ' : ''} ${resizable ? '0' : ''} 1fr`,
          '--sidebar-width': $slots.sidebar ? `${sidebar.width}px` : void 0
        }"
        :class="[
          'grid size-full text-sm/6 duration-500 ease-braking max-sm:overflow-x-hidden',
          'max-sm:grid-cols-[var(--max-sm-grid-cols)] max-sm:[--sidebar-active-init:0] sm:grid-cols-[var(--sm-grid-cols)] sm:[--sidebar-active-init:1]'
        ]"
      >
        <header
          v-if="$slots.header"
          :style="{ gridArea: 'header' }"
          :class="[
            'flex h-14 items-center gap-3 bg-pri-ctr px-3 transition duration-500 ease-braking',
            {
              'max-sm:translate-x-[var(--sidebar-width)] max-sm:brightness-75': sidebar.active === 1
            }
          ]"
        >
          <slot name="header" :="{ toggleSidebar }"></slot>
        </header>

        <div
          v-if="$slots.sidebar"
          style="grid-area: sidebar"
          class="overflow-x-hidden sm:border-0 sm:border-r-1.2 sm:border-solid sm:border-otl-var"
        >
          <div
            @click="toggleSidebar"
            :class="['fixed inset-0 z-10 sm:hidden', { hidden: sidebar.active !== 1 }]"
          ></div>

          <aside
            style="width: var(--sidebar-width)"
            :class="[
              'box-border h-full overflow-y-auto bg-bsc p-3 transition duration-500 ease-braking max-sm:fixed max-sm:inset-y-0 max-sm:left-0 max-sm:z-10 max-sm:border-0 max-sm:border-r-1.2 max-sm:border-solid max-sm:border-otl-var',
              { 'max-sm:-translate-x-full': sidebar.active === 0 || sidebar.active === -1 }
            ]"
          >
            <slot name="sidebar" :="{ toggleSidebar }"></slot>
          </aside>
        </div>

        <ScaffoldSidebarResizer
          v-model:width="sidebar.width"
          class="sticky top-0 z-10 -mx-1 w-2 cursor-ew-resize max-sm:pointer-events-none"
        />

        <main
          style="grid-area: body"
          :class="[
            'overflow-y-auto bg-bsc p-3 transition duration-500 ease-braking',
            {
              'max-sm:translate-x-[var(--sidebar-width)] max-sm:brightness-75': sidebar.active === 1
            }
          ]"
        >
          <slot :="{ toggleSidebar }"></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply m-0 p-0;
}
</style>
