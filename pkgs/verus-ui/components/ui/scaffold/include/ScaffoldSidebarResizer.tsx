import type { FunctionalComponent } from 'vue'

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
  /**
   * TODO 切换窗口导致事件没有移除
   */
  function onPointermove(evt: PointerEvent) {
    const { clientX } = evt
    requestAnimationFrame(() => void emit('update:width', clientX))
  }

  function onPointerdown(evt: PointerEvent) {
    const target = evt.target as HTMLElement
    target.onpointermove = onPointermove
    target.setPointerCapture(evt.pointerId)
  }

  function onPointerup(evt: PointerEvent) {
    const target = evt.target as HTMLElement
    target.onpointermove = null
    target.releasePointerCapture(evt.pointerId)
  }

  return <div style='grid-area: resizer' onPointerdown={onPointerdown} onPointerup={onPointerup} />
}

ScaffoldSidebarResizer.props = {
  width: Number
}

ScaffoldSidebarResizer.emits = ['update:width']

export default ScaffoldSidebarResizer
