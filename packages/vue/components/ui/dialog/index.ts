import { useInstall } from '@verus-ui/common'
import Dialog from './Dialog.vue'

export interface DialogProps {
  title?: string
  subtitle?: string
  danger?: boolean
  /**
   * @default '28rem'
   */
  width?: string
}

export interface DialogSlots {
  trigger: (props: { show: () => void }) => any
  default: (props: { hide: () => void; withHide: () => void }) => any
  actions: (props: { hide: () => void; withHide: () => void }) => any
}

export const VDialog = useInstall(
  Dialog as unknown as new () => {
    $props: DialogProps
    $slots: DialogSlots
  }
)
