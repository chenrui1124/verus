import type { DefineSetupFnComponent, FunctionalComponent, PropType } from 'vue'
import type { TooltipProps, TooltipSlots } from '.'

import {
  Transition,
  cloneVNode,
  computed,
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  reactive
} from 'vue'
import { clsx } from 'clsx'
import {
  onListener,
  useFirstVNode,
  useRender,
  useVisible,
  withPrefix,
  withRollback
} from '@verus-ui/common'

interface SingleTooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left'
  coord?: { top: string; left: string }
  label?: string
}

const useTooltip = (() => {
  let SingleTooltip: DefineSetupFnComponent<any>

  function initTooltip() {
    SingleTooltip = defineComponent(() => {
      let offMouseOver: () => void
      let offMouseOut: () => void

      const props = reactive<SingleTooltipProps>({})
      const { state, show, hide } = useVisible()

      onMounted(() => {
        offMouseOver = onListener('mouseover', (evt: Event) => {
          const el = evt.target as HTMLElement
          const { tooltipLabel: label, tooltipPosition: position } = el.dataset

          if (label && position) {
            props.label = label

            if (['top', 'right', 'bottom', 'left'].includes(position)) {
              props.position = position as SingleTooltipProps['position']
            }

            const rect = el.getBoundingClientRect()
            props.coord = {
              top: ['right', 'left'].includes(props.position!)
                ? `${(rect.bottom + rect.top) / 2}px`
                : `${rect[props.position!]}px`,
              left: ['top', 'bottom'].includes(props.position!)
                ? `${(rect.right + rect.left) / 2}px`
                : `${rect[props.position!]}px`
            }

            show()
          }
        })

        offMouseOut = onListener('mouseout', () => void (state.value && hide()))
      })

      onUnmounted(() => {
        offMouseOver()
        offMouseOut()
      })

      const classes = computed(() => {
        return clsx(
          props.position
            ? {
                top: 'translate-y-1',
                right: '-translate-x-1',
                bottom: '-translate-y-1',
                left: 'translate-x-1'
              }[props.position]
            : void 0,
          'opacity-0'
        )
      })

      return () => (
        <Transition enterFromClass={classes.value} leaveToClass={classes.value}>
          {state.value && (
            <div style={props.coord} class='fixed z-30 h-0 w-0 transition-all duration-300'>
              <div
                class={[
                  'pointer-events-none absolute h-8 text-nowrap rounded-v1 bg-on-bsc px-3 text-sm/8 tracking-wide text-bsc shadow shadow-on-bsc/32 transition-colors duration-300 before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit',
                  {
                    'left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2': [
                      'top',
                      'bottom'
                    ].includes(props.position!),
                    'top-1/2 -translate-y-1/2 before:top-1/2 before:-translate-y-1/2': [
                      'right',
                      'left'
                    ].includes(props.position!)
                  },
                  {
                    top: 'bottom-2 before:-bottom-1',
                    right: 'left-2 before:-left-1',
                    bottom: 'top-2 before:-top-1',
                    left: 'right-2 before:-right-1'
                  }[props.position!]
                ]}
              >
                {props.label}
              </div>
            </div>
          )}
        </Transition>
      )
    })

    useRender(SingleTooltip)
  }

  return () => {
    if (!SingleTooltip) initTooltip()
  }
})()

const Tooltip: FunctionalComponent<TooltipProps, {}, TooltipSlots> = (
  { label, position },
  { slots }
) => {
  const first = useFirstVNode(slots.default)

  if (first) {
    const attachProps = {
      'data-tooltip-label': label,
      'data-tooltip-position': withRollback(position, ['top', 'right', 'bottom', 'left'])
    }
    const newNode = cloneVNode(first, attachProps)
    useTooltip()
    return h(newNode)
  }

  return slots.default?.()
}

Tooltip.props = {
  label: {
    type: String as PropType<TooltipProps['label']>,
    required: true
  },
  position: {
    type: String as PropType<TooltipProps['position']>,
    default: 'top',
    validator: (value: TooltipProps['position']) =>
      ['top', 'right', 'bottom', 'left'].includes(value!)
  }
}

Tooltip.displayName = withPrefix('Tooltip')

export default Tooltip
