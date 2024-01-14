import { toPlugin } from '@utils'
import AutoGrid from './VAutoGrid.vue'

export type AutoGridProps = {
  minWidth: string
  size?: 'sm' | 'md' | 'lg'
}

export const VAutoGrid = toPlugin(AutoGrid)
