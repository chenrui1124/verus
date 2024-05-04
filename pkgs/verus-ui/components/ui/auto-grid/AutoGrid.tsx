import type { FunctionalComponent } from 'vue'
import type { AutoGridProps, AutoGridSlots } from '.'

import { withPrefix } from '@verus-ui/common'

const AutoGrid: FunctionalComponent<AutoGridProps, {}, AutoGridSlots> = (
  { width, itemWidth, gap },
  { slots }
) => (
  <div
    style={{
      width,
      gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth ?? 'min-content'}, 1fr))`
    }}
    class='grid'
  >
    {slots.default?.()}
  </div>
)

AutoGrid.props = {
  width: String,
  itemWidth: String,
  gap: {
    type: String,
    default: '1rem'
  }
}

AutoGrid.displayName = withPrefix('AutoGrid')

export default AutoGrid
