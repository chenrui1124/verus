import type { DefineSetupFnComponent } from 'vue'

import { defineComponent, reactive, Transition } from 'vue'
import { useRender, useVisible } from '@composable'

function useOverlayFactory() {
  const { state, show, hide } = useVisible()

  let SingleOverlay: DefineSetupFnComponent<any>

  const listener = reactive<{ onClick?: (evt: MouseEvent) => void }>({ onClick: void 0 })

  function showOverlay() {
    show()
  }

  function showOverlayWithListener(callback: (evt: MouseEvent) => void) {
    listener.onClick = callback
    showOverlay()
  }

  function hideOverlay() {
    hide()
    listener.onClick = void 0
  }

  return () => {
    if (!SingleOverlay) {
      SingleOverlay = defineComponent(function () {
        return () => (
          <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
            {state.value && (
              <div
                {...listener}
                class='fixed inset-0 z-30 bg-black/48 backdrop-blur-sm transition duration-700 ease-out'
              />
            )}
          </Transition>
        )
      })

      useRender(SingleOverlay)
    }

    return { showOverlay, showOverlayWithListener, hideOverlay }
  }
}

export const useOverlay = useOverlayFactory()
