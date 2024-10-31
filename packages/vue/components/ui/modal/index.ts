import { useInstall } from '@verus-ui/common'
import Modal from './Modal.vue'

export interface ModalProps {
  /**
   * @default '24rem'
   */
  width?: string
}

export interface ModalSlots {
  trigger(props: { show: () => void }): any
  default(props: { hide: () => void }): any
}

export const VModal = useInstall(
  Modal as unknown as new () => {
    $props: ModalProps
    $slots: ModalSlots
  }
)
