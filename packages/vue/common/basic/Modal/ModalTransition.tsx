import type { SetupContext, TransitionProps } from 'vue'

import { Teleport, Transition } from 'vue'

export interface ModalTransitionProps extends TransitionProps {
  layer?: boolean
}

function ModalTransition(
  { layer, ...transitionProps }: ModalTransitionProps,
  { slots }: SetupContext
) {
  function onEnter(el: Element) {
    if (layer) {
      void (el as HTMLDialogElement).showModal()
    } else {
      void (el as HTMLDialogElement).show()
    }
  }

  function onAfterLeave(el: Element) {
    void (el as HTMLDialogElement).close()
  }

  const rendered = (
    <Transition {...{ onEnter, onAfterLeave }} {...transitionProps}>
      {slots.default?.()}
    </Transition>
  )

  return layer ? <>{rendered}</> : <Teleport to='body'>{rendered}</Teleport>
}

export default ModalTransition
