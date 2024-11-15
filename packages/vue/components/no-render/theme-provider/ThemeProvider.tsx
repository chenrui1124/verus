import type { PropType, WatchStopHandle } from 'vue'
import type { ThemeProp } from '@verus-ui/ts'

import { defineComponent, h, onMounted, onUnmounted, watchEffect } from 'vue'
import { Theme, eachTheme } from '@verus-ui/ts'
import { withPrefix, withFallback } from '@verus-ui/common'

const LOCAL_STORAGE_KEY = 'VERUS_THEME'

export interface ThemeProviderProps {
  persist?: boolean
  tag?: string
}

export interface ThemeProviderModel {
  theme?: ThemeProp
}

const ThemeProvider = defineComponent<
  ThemeProviderProps & ThemeProviderModel,
  { 'update:theme': (theme: ThemeProviderModel['theme']) => void }
>(
  (props, { emit, slots }) => {
    let unwatch: WatchStopHandle

    onMounted(() => {
      if (props.tag) return

      if (props.persist) {
        const _theme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeProviderModel['theme']
        if (_theme && eachTheme().includes(_theme)) emit('update:theme', _theme)
      }

      unwatch = watchEffect(() => {
        const _theme = withFallback({ each: eachTheme(), value: props.theme, fallback: Theme.Auto })
        document.documentElement.dataset.theme = _theme
        if (props.persist) localStorage.setItem(LOCAL_STORAGE_KEY, _theme!)
      })
    })

    onUnmounted(() => unwatch?.())

    return () => {
      if (props.tag) {
        return h(
          props.tag,
          {
            'data-name': 'ThemeProvider',
            'data-theme': withFallback({
              each: eachTheme(),
              value: props.theme,
              fallback: Theme.Auto
            })
          },
          slots.default?.()
        )
      } else {
        return slots.default?.()
      }
    }
  },
  {
    name: withPrefix('ThemeProvider'),
    props: {
      persist: Boolean,
      tag: String,
      theme: String as PropType<ThemeProviderModel['theme']>
    },
    emits: ['update:theme']
  }
)

export default ThemeProvider
