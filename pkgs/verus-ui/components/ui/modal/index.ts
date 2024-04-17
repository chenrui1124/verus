import { toPlugin } from '@verus-ui/common'
import Modal from './Modal.vue'

export type ModalProps = {
  /**
   * @default '24rem'
   */
  width?: string
}

export const VModal = toPlugin(Modal)
