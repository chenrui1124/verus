<script setup lang="ts">
import type { WatchStopHandle } from 'vue'
import type { ThemeProviderProps, ThemeProviderSlots } from '.'

import { Fragment, computed, h, onMounted, onUnmounted, watchEffect } from 'vue'
import { withPrefix } from '@verus-ui/common'
import { EACH_THEME } from '.'

defineOptions({ name: withPrefix('ThemeProvider') })

const { theme = 'auto', tag, global } = defineProps<ThemeProviderProps>()

const emit = defineEmits<{ change: [newThemeValue: ThemeProviderProps['theme']] }>()

const computedTheme = computed(() => (EACH_THEME.includes(theme) ? theme : 'auto'))

let unwatch: WatchStopHandle

onMounted(() => {
  unwatch = watchEffect(() => {
    if (global) {
      document.documentElement.dataset.theme = computedTheme.value
      emit('change', computedTheme.value)
    }
  })
})

onUnmounted(() => unwatch?.())

const slots = defineSlots<ThemeProviderSlots>()

function DefaultSlot() {
  if (tag) {
    return h(
      tag,
      {
        'data-theme-provider': '',
        'data-theme': computedTheme.value
      },
      slots.default?.()
    )
  } else {
    return h(Fragment, null, slots.default?.())
  }
}
</script>

<template>
  <DefaultSlot />
</template>
