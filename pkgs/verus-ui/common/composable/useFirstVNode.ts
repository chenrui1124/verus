import type { Slot, VNode } from 'vue'

export function useFirstVNode(slot: Slot | ((...arg: any[]) => any) | undefined): VNode | null {
  if (!slot) {
    return null
  }

  const nodes = slot()

  if (!nodes) {
    return null
  }

  if (nodes.length) {
    let firstNode: VNode | null = null
    for (const node of nodes) {
      if (!(typeof node.type == 'symbol')) {
        firstNode = node
        break
      }
    }
    if (firstNode) {
      return firstNode
    }
  }

  return null
}
