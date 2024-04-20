<script setup lang="ts">
import type { WatchStopHandle } from 'vue'
import type { ThemeProviderProps } from '.'

import { Fragment, computed, h, onMounted, onUnmounted, watchEffect } from 'vue'
import { EACH_THEME } from '.'

const { theme = 'auto', tag, global } = defineProps<ThemeProviderProps>()

const emit = defineEmits<{ change: [newThemeValue: ThemeProviderProps['theme']] }>()

let unwatch: WatchStopHandle

const _theme = computed(() => (EACH_THEME.includes(theme) ? theme : 'auto'))

onMounted(() => {
  unwatch = watchEffect(() => {
    if (global) {
      document.documentElement.dataset.theme = _theme.value
      emit('change', _theme.value)
    }
  })
})

onUnmounted(() => unwatch?.())

const slots = defineSlots<{ default(props: void): any }>()

function Render() {
  if (tag) {
    return h(tag, { 'data-theme-provider': '', 'data-theme': _theme.value }, slots.default?.())
  } else {
    return h(Fragment, null, slots.default?.())
  }
}
</script>

<template>
  <Render />
</template>
