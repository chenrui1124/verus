import type { FunctionalComponent } from 'vue'

import { useDragListener } from '@verus-ui/common'

interface ScaffoldSidebarResizerProps {
  width: number
}

type ScaffoldSidebarResizerEmits = {
  'update:width': [width: number]
}

const ScaffoldSidebarResizer: FunctionalComponent<
  ScaffoldSidebarResizerProps,
  ScaffoldSidebarResizerEmits
> = (_, { emit }) => {
  const props = useDragListener((evt: PointerEvent) => {
    const { clientX } = evt
    requestAnimationFrame(() => void emit('update:width', clientX))
  })

  return <div style='grid-area: resizer' {...props} />
}

ScaffoldSidebarResizer.props = {
  width: Number
}

ScaffoldSidebarResizer.emits = ['update:width']

export default ScaffoldSidebarResizer
