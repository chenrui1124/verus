import type { PropType, WatchStopHandle } from 'vue'
import type { ThemeProviderModel, ThemeProviderProps } from '.'

import { defineComponent, h, onMounted, onUnmounted, watchEffect } from 'vue'
import { EACH_THEME } from '.'
import { withPrefix, withRollback } from '@verus-ui/common'

const LOCAL_STORAGE_KEY = 'VERUS_THEME'

const ThemeProvider = defineComponent<
  ThemeProviderProps & ThemeProviderModel,
  { 'update:theme': (theme: ThemeProviderModel['theme']) => void }
>(
  (props, { emit, slots }) => {
    let unwatch: WatchStopHandle

    onMounted(() => {
      if (!props.tag) {
        if (props.persist) {
          const _theme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeProviderModel['theme']
          if (_theme && EACH_THEME.includes(_theme)) emit('update:theme', _theme)
        }

        unwatch = watchEffect(() => {
          const _theme = withRollback(props.theme, EACH_THEME)
          document.documentElement.dataset.theme = _theme
          if (props.persist) localStorage.setItem(LOCAL_STORAGE_KEY, _theme!)
        })
      }
    })

    onUnmounted(() => unwatch?.())

    return () => {
      if (props.tag) {
        return h(
          props.tag,
          {
            'data-theme-provider': '',
            'data-theme': withRollback(props.theme, EACH_THEME)
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
      tag: String,
      persist: Boolean,
      theme: String as PropType<ThemeProviderModel['theme']>
    },
    emits: ['update:theme']
  }
)

export default ThemeProvider
