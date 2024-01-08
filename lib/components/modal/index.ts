import { toPlugin } from '@utils'
import Modal from './VModal.vue'

export type ModalProps = {
  title?: string
  subtitle?: string
  danger?: boolean
  /**
   * @default '28rem'
   */
  width?: string
  /**
   * allow use 'esc' to close.
   */
  shortcut?: string
}

export const VModal = toPlugin(Modal)
