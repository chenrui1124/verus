import { useInstall } from '@verus-ui/common'
import AutoGrid from './AutoGrid'

export interface AutoGridProps {
  /**
   * @default 1rem
   */
  gap?: string
  itemWidth?: string
  width?: string
}

export interface AutoGridSlots {
  default: void
}

export const VAutoGrid = useInstall(
  AutoGrid as unknown as new () => {
    $props: AutoGridProps
    $slots: AutoGridSlots
  }
)
