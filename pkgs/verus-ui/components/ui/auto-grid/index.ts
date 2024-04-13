import { toPlugin } from '@verus-ui/common'
import AutoGrid from './VAutoGrid.vue'

export type AutoGridProps = {
  /**
   * @default 'auto'
   */
  width?: string
  itemWidth: string
  gap?: 'sm' | 'md' | 'lg'
}

export const VAutoGrid = toPlugin(AutoGrid)
