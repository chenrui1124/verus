import { toPlugin } from '@utils'
import AutoGrid from './VAutoGrid.vue'

export type AutoGridProps = {
  itemWidth: string
  /**
   * @default 'auto'
   */
  width?: string
  gap?: 'sm' | 'md' | 'lg'
}

export const VAutoGrid = toPlugin(AutoGrid)
