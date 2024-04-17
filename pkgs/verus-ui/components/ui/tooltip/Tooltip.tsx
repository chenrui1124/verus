import type { PropType } from 'vue'
import type { TooltipProps } from '.'

import { cloneVNode, defineComponent, h } from 'vue'
import { getFirstVNode, useTooltip } from '@verus-ui/common'

export default defineComponent({
  __name: 'Tooltip',
  inheritAttrs: false,
  props: {
    text: {
      type: String as PropType<TooltipProps['text']>,
      required: true
    },
    position: {
      type: String as PropType<TooltipProps['position']>,
      default: 'top'
    }
  },
  setup({ text, position }, { slots }) {
    const first = getFirstVNode(slots.default)

    if (first) {
      const attachProps = {
        'data-tooltip-text': text,
        'data-tooltip-position': position
      }
      const newNode = cloneVNode(first, attachProps)
      useTooltip()
      return () => h(newNode)
    }

    return () => <>{slots.default?.()}</>
  }
})
