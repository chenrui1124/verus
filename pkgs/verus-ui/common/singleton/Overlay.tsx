import type { DefineSetupFnComponent } from 'vue'

import { Transition, defineComponent, reactive } from 'vue'
import { twMerge } from 'tailwind-merge'
import { useRender, useVisible } from '@verus-ui/common'

function useOverlayFactory() {
  const { state, show, hide } = useVisible()

  let SingleOverlay: DefineSetupFnComponent<any>

  let cls: string | undefined

  const listener = reactive<{ onClick?: (evt: MouseEvent) => void }>({ onClick: void 0 })

  function initOverlay() {
    SingleOverlay = defineComponent(function () {
      return () => (
        <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
          {state.value && (
            <div
              {...listener}
              class={twMerge(
                'fixed inset-0 z-30 bg-black/48 backdrop-blur-sm transition duration-700 ease-out',
                cls
              )}
            />
          )}
        </Transition>
      )
    })
    useRender(SingleOverlay)
  }

  return function (loadedCls?: string) {
    if (!SingleOverlay) initOverlay()

    function showOverlay() {
      cls = loadedCls
      show()
    }

    function showOverlayWithListener(callback: (evt: MouseEvent) => void) {
      listener.onClick = callback
      showOverlay()
    }

    function hideOverlay() {
      hide()
      listener.onClick = void 0
      cls = undefined
    }

    return { showOverlay, showOverlayWithListener, hideOverlay }
  }
}

export const useOverlay = useOverlayFactory()
