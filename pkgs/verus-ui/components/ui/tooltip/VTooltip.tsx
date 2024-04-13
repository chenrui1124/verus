import type { PropType, VNode } from 'vue'
import type { TooltipProps } from '.'

import { cloneVNode, defineComponent, h } from 'vue'
import { useTooltip } from '@verus-ui/common'

export default defineComponent({
  name: 'Tooltip',
  inheritAttrs: false,
  props: {
    text: {
      type: String as PropType<TooltipProps['text']>,
      required: true
    },
    direction: {
      type: String as PropType<TooltipProps['direction']>,
      default: 'top'
    }
  },
  setup({ text, direction }, { slots }) {
    const nodes = slots.default?.()
    if (!nodes) return () => <>{slots.default?.()}</>

    const first = nodes[0] as VNode
    if (first && !(first.type instanceof Symbol)) {
      const attachProps = {
        'data-tooltip-text': text,
        'data-tooltip-direction': direction
      }
      const newNode = cloneVNode(first, attachProps)

      useTooltip()
      return () => h(newNode)
    }

    return () => <>{slots.default?.()}</>
  }
})
