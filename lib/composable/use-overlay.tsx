import { Transition, computed, defineComponent, h, ref, render } from 'vue'

export const useOverlay = (function () {
  const _visible = ref<boolean>(),
    _onClick = ref<(e?: Event) => void>(),
    _props = computed(() => (_onClick.value ? { onClick: _onClick.value } : {}))

  const Overlay = defineComponent({
    name: 'Overlay',
    render: () => (
      <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
        {_visible.value && (
          <div
            {..._props.value}
            class='fixed inset-0 z-30 bg-black/16 backdrop-blur-sm transition duration-700 ease-out'
          />
        )}
      </Transition>
    )
  })

  render(h(Overlay), document.body)

  return () => ({
    on() {
      requestAnimationFrame(() => (_visible.value = true))
    },
    onWith(action?: (e?: Event) => void) {
      requestAnimationFrame(() => {
        _visible.value = true
        _onClick.value = action
      })
    },
    off() {
      requestAnimationFrame(() => {
        _visible.value = false
        !_onClick.value && (_onClick.value = void 0)
      })
    }
  })
})()
