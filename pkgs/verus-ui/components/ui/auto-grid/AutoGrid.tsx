import type { FunctionalComponent } from 'vue'
import type { AutoGridProps, AutoGridSlots } from '.'

import { withPrefix } from '@verus-ui/common'

const AutoGrid: FunctionalComponent<AutoGridProps, {}, AutoGridSlots> = (
  { gap, itemWidth, width },
  { slots }
) => (
  <div
    style={{
      width,
      gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(${itemWidth ?? 'min-content'}, 1fr))`
    }}
    class='grid items-center justify-items-center'
  >
    {slots.default?.()}
  </div>
)

AutoGrid.props = {
  gap: {
    type: String,
    default: '1rem'
  },
  itemWidth: String,
  width: String
}

AutoGrid.displayName = withPrefix('AutoGrid')

export default AutoGrid
