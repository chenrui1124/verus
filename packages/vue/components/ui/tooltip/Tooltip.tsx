import type { PropType } from 'vue'
import type { PositionProp } from '@verus-ui/ts'

import { defineComponent, onUnmounted, reactive } from 'vue'
import { eachPosition, Position } from '@verus-ui/ts'
import { addListenerToBody, useRender, useToggle, withFallback, withPrefix } from '@verus-ui/common'
import { TooltipContent, TooltipTransition } from './include'

export interface TooltipProps {
  label?: string
  position?: PositionProp
}

const initTooltipContent = (() => {
  const props = reactive({
    coord: {},
    label: '',
    position: Position.Top
  })

  const { state, on, off } = useToggle()

  let removeMouseover: (() => void) | null,
    removeMouseout: (() => void) | null,
    tooltipCounter: number = 0

  const [mount, unmount] = useRender(() => {
    function onAfterLeave() {
      unmount({ delay: 10 * 1000 })
    }

    return (
      <TooltipTransition position={props.position} onAfterLeave={onAfterLeave}>
        {state.value && (
          <TooltipContent position={props.position} coord={props.coord}>
            {props.label}
          </TooltipContent>
        )}
      </TooltipTransition>
    )
  })

  return () => {
    tooltipCounter++

    if (!removeMouseover) {
      removeMouseover = addListenerToBody('mouseover', evt => {
        const el = evt.target as HTMLElement
        const { tooltipLabel: tl, tooltipPosition: tp } = el.dataset

        if (!tl || !tp) return

        const rect = el.getBoundingClientRect()

        props.label = tl
        props.position = tp as Position
        props.coord = {
          top: [Position.Right, Position.Left].includes(tp as Position)
            ? `${(rect.bottom + rect.top) / 2}px`
            : `${rect[props.position]}px`,
          left: [Position.Top, Position.Bottom].includes(tp as Position)
            ? `${(rect.right + rect.left) / 2}px`
            : `${rect[props.position]}px`
        }

        mount()
        on()
      })
    }

    if (!removeMouseout) removeMouseout = addListenerToBody('mouseout', () => off())

    return () => {
      tooltipCounter--

      if (tooltipCounter == 0) {
        removeMouseover?.()
        removeMouseout?.()
        removeMouseover = removeMouseout = null
      }
    }
  }
})()

const Tooltip = defineComponent(
  (props: TooltipProps, { slots }) => {
    if (!slots.default) return () => null
    const ds = slots.default()
    if (!ds || ds.length == 0) return () => null

    const clear = initTooltipContent()
    onUnmounted(clear)

    for (const v of ds) {
      /**
       * Exclude text node and comment node.
       */
      if (typeof v.type == 'symbol') continue
      v.props = {
        ...(v.props ?? {}),
        'data-tooltip-label': props.label,
        'data-tooltip-position': withFallback({
          each: eachPosition(),
          fallback: Position.Top,
          value: props.position
        })
      }
    }

    return () => <>{ds}</>
  },
  {
    name: withPrefix('Tooltip'),
    props: {
      label: String,
      position: {
        type: String as PropType<PositionProp>,
        default: Position.Top
      }
    }
  }
)

export default Tooltip
