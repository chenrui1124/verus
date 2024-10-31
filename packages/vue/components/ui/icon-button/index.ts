import { useInstall } from '@verus-ui/common'
import IconButton from './IconButton.vue'

export interface IconButtonProps {
  icon: string
  disabled?: boolean
  danger?: boolean
}

export const VIconButton = useInstall(
  IconButton as unknown as new () => {
    $props: IconButtonProps
    $emit: (name: 'click', payload?: MouseEvent) => void
  }
)
