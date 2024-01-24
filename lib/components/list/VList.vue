<script setup lang="ts">
import type { ListProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'

const { each } = defineProps<ListProps>()

const _each = computed(() =>
  each.map(i => {
    if (typeof i == 'string') {
      return { text: i, value: i }
    } else {
      return i
    }
  })
)
</script>

<template>
  <ul style="grid-template-columns: auto 1fr auto" class="grid gap-1" @click="">
    <li
      v-for="(item, index) in _each"
      :key="index"
      tabindex="0"
      class="col-span-3 inline-grid cursor-pointer list-none grid-cols-subgrid items-center gap-4 rounded-v1 px-4 transition-all duration-300 v-outline-none hover:bg-pri/8 focus-visible:v-outline"
    >
      <Icon v-if="item.icon" :icon="item.icon" class="col-start-1" />
      <span class="pointer-events-none col-start-2 mr-auto inline-block text-sm/9 duration-inherit">
        {{ item.text }}
      </span>
      <component
        :is="item.children ? Icon : 'span'"
        icon="i-[solar--alt-arrow-right-linear]"
        class="col-start-3"
        :class="item.children || 'inline-block'"
      />
    </li>
  </ul>
</template>
