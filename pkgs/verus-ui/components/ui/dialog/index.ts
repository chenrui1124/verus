import { toPlugin } from '@verus-ui/common'
import Dialog from './VDialog.vue'

export type DialogProps = {
  title?: string
  subtitle?: string
  danger?: boolean
  /**
   * @default '28rem'
   */
  width?: string
}

export const VDialog = toPlugin(Dialog)
