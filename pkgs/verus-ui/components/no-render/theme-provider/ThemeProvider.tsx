import type { PropType, WatchStopHandle } from 'vue'
import type { ThemeProviderProps } from '.'

import { defineComponent, onMounted, onUnmounted, watchEffect } from 'vue'

export default defineComponent({
  __name: 'ThemeProvider',
  props: {
    theme: {
      type: String as PropType<ThemeProviderProps['theme']>,
      default: 'auto'
    },
    global: Boolean,
    tag: String
  },
  setup({ theme, global, tag }, { slots }) {
    let unwatch: WatchStopHandle

    onMounted(() => {
      unwatch = watchEffect(() => {
        if (global) {
          document.documentElement.dataset.theme = theme
        }
      })
    })

    onUnmounted(() => unwatch?.())

    if (typeof tag == 'string') {
      const Tag = tag
      return () => <Tag>{slots.default?.()}</Tag>
    } else {
      return () => <>{slots.default?.()}</>
    }
  }
})
