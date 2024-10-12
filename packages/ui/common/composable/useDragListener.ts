export function useDragListener(onPointermove: (evt: PointerEvent) => void) {
  function onPointerdown(evt: PointerEvent) {
    const el = evt.target as HTMLElement
    el.addEventListener('pointermove', onPointermove)
    el.setPointerCapture(evt.pointerId)
  }

  function onPointerup(evt: PointerEvent) {
    const el = evt.target as HTMLElement
    el.addEventListener('pointerup', onPointermove)
    el.releasePointerCapture(evt.pointerId)
  }

  return { onPointerdown, onPointerup }
}
