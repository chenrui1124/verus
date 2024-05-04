import type { DefineSetupFnComponent } from 'vue'

import { Transition, defineComponent, reactive } from 'vue'
import { twMerge } from 'tailwind-merge'
import { useRender, useVisible } from '@verus-ui/common'

function useOverlayFactory() {
  let SingleOverlay: DefineSetupFnComponent<any>
  let useVisibleReturn: ReturnType<typeof useVisible>
  let props: { classes?: string; onClick?: (evt: MouseEvent) => void }

  function initOverlay() {
    SingleOverlay = defineComponent(function () {
      props = reactive({})
      useVisibleReturn = useVisible()
      const { state } = useVisibleReturn

      return () => (
        <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
          {state.value && (
            <div
              onClick={props.onClick}
              class={twMerge(
                'fixed inset-0 z-30 bg-black/48 backdrop-blur-sm transition duration-700 ease-out',
                props.classes
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
      props.classes = loadedCls
      useVisibleReturn.show()
    }

    function showOverlayWithListener(callback: (evt: MouseEvent) => void) {
      props.onClick = callback
      showOverlay()
    }

    function hideOverlay() {
      useVisibleReturn.hide()
      props.onClick = void 0
      props.classes = void 0
    }

    return { showOverlay, showOverlayWithListener, hideOverlay }
  }
}

export const useOverlay = useOverlayFactory()
