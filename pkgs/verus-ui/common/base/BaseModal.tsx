import type {
  DialogHTMLAttributes,
  FunctionalComponent,
  HTMLAttributes,
  TransitionProps
} from 'vue'

import { Teleport, Transition } from 'vue'
import { twMerge } from 'tailwind-merge'

interface BaseModalProps
  extends Partial<
    DialogHTMLAttributes &
      Pick<
        TransitionProps,
        | 'enterActiveClass'
        | 'enterFromClass'
        | 'enterToClass'
        | 'leaveActiveClass'
        | 'leaveFromClass'
        | 'leaveToClass'
      >
  > {
  state: boolean | undefined
  layer?: boolean
}

const BaseModal: FunctionalComponent<BaseModalProps, {}, { default: void }> = (
  props,
  { attrs, slots }
) => {
  const { state, layer, ...transitionProps } = props
  const { class: className, ...others } = attrs

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

  const Dialog = (
    <Transition onEnter={onEnter} onAfterLeave={onAfterLeave} {...transitionProps}>
      {state && (
        <dialog
          {...others}
          tabindex='-1'
          class={twMerge('outline-none backdrop:hidden', className as HTMLAttributes['class'])}
        >
          {slots.default?.()}
        </dialog>
      )}
    </Transition>
  )

  return layer ? <>{Dialog}</> : <Teleport to='body'>{Dialog}</Teleport>
}

BaseModal.props = {
  state: Boolean,
  layer: Boolean,
  enterActiveClass: String,
  enterFromClass: String,
  enterToClass: String,
  leaveActiveClass: String,
  leaveFromClass: String,
  leaveToClass: String
}

BaseModal.inheritAttrs = false

export default BaseModal
