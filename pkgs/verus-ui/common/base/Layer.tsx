import type { FunctionalComponent, HTMLAttributes, TransitionProps } from 'vue'

import { Teleport, Transition } from 'vue'
import { twMerge } from 'tailwind-merge'

type BaseLayerProps = {
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

const BaseLayer: FunctionalComponent<BaseLayerProps> = (props, { attrs, slots }) => {
  const { state, disableTopLayer, ...transitionProps } = props
  const { class: className, ...others } = attrs

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
        <dialog
          {...others}
          tabindex='-1'
          class={twMerge('outline-none backdrop:hidden', className as HTMLAttributes['class'])}>
          {slots.default?.()}
        </dialog>
      )}
    </Transition>
  )

  return disableTopLayer ? <>{Dialog}</> : <Teleport to='body'>{Dialog}</Teleport>
}

BaseLayer.props = {
  state: Boolean,
  disableTopLayer: Boolean,
  enterActiveClass: String,
  enterFromClass: String,
  enterToClass: String,
  leaveActiveClass: String,
  leaveFromClass: String,
  leaveToClass: String
}

BaseLayer.inheritAttrs = false

export default BaseLayer
