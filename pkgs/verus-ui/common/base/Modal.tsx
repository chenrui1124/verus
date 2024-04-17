import type { HTMLAttributes, SetupContext, TransitionProps } from 'vue'

import { Teleport, Transition } from 'vue'

type BaseModalProps = {
  state: boolean | undefined
  disableTopLayer?: boolean
} & Pick<
  TransitionProps,
  | 'enterActiveClass'
  | 'enterFromClass'
  | 'enterToClass'
  | 'leaveActiveClass'
  | 'leaveFromClass'
  | 'leaveToClass'
> & {
    onCancel?: (payload: Event) => void | undefined
    onClose?: (payload: Event) => void | undefined
    class?: HTMLAttributes['class']
    style?: HTMLAttributes['style']
  }

function BaseModal(props: BaseModalProps, { attrs, slots }: SetupContext) {
  const { state, disableTopLayer, ...transitionProps } = props

  function onEnter(el: Element) {
    if (disableTopLayer) {
      void (el as HTMLDialogElement).show()
    } else {
      void (el as HTMLDialogElement).showModal()
    }
  }

  function onAfterLeave(el: Element) {
    void (el as HTMLDialogElement).close()
  }

  const Dialog = (
    <Transition onEnter={onEnter} onAfterLeave={onAfterLeave} {...transitionProps}>
      {state && (
        <dialog {...attrs} tabindex='-1' class='outline-none backdrop:hidden'>
          {slots.default?.()}
        </dialog>
      )}
    </Transition>
  )

  return disableTopLayer ? <>{Dialog}</> : <Teleport to='body'>{Dialog}</Teleport>
}

BaseModal.props = {
  state: Boolean,
  disableTopLayer: Boolean,
  onClickBackdrop: Function,
  enterActiveClass: String,
  enterFromClass: String,
  enterToClass: String,
  leaveActiveClass: String,
  leaveFromClass: String,
  leaveToClass: String
}

BaseModal.inheritAttrs = false

export default BaseModal
