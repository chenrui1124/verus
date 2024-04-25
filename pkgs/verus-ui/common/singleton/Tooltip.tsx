import type { DefineSetupFnComponent } from 'vue'

import { Transition, defineComponent, reactive } from 'vue'
import { useRender, useVisible } from '@verus-ui/common'


type SingleTooltipProps = {
  coord: { top: string; left: string }
  position?: 'top' | 'right' | 'bottom' | 'left'
  text: string
}

function useTooltipFactory() {
  const props = reactive<SingleTooltipProps>({
    coord: { top: '', left: '' },
    position: 'top',
    text: ''
  })

  let SingleTooltip: DefineSetupFnComponent<any>

  const { state, show, hide } = useVisible()

  function initTooltip() {
    SingleTooltip = defineComponent(function () {
      return () => (
        <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
          {state.value && (
            <div style={props.coord} class={'fixed h-0 w-0 transition-all duration-300'}>
              <div
                class={[
                  'pointer-events-none absolute z-30 h-8 text-nowrap rounded-v1 bg-on-bsc px-3 text-sm/8 text-bsc shadow shadow-on-bsc/32 transition-colors duration-300 before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit',
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
                ]}>
                {props.text}
              </div>
            </div>
          )}
        </Transition>
      )
    })

    document.body.addEventListener('mouseover', (evt: Event) => {
      const el = evt.target as HTMLElement

      const { tooltipLabel: label, tooltipPosition: position } = el.dataset

      if (label && position) {
        props.text = label

        if (['top', 'right', 'bottom', 'left'].includes(position)) {
          props.position = position as SingleTooltipProps['position']
        }
        const rect = el.getBoundingClientRect()

        props.coord.top = ['right', 'left'].includes(props.position!)
          ? `${(rect.bottom + rect.top) / 2}px`
          : `${rect[props.position!]}px`

        props.coord.left = ['top', 'bottom'].includes(props.position!)
          ? `${(rect.right + rect.left) / 2}px`
          : `${rect[props.position!]}px`

        show()
      }
    })

    document.body.addEventListener('mouseout', () => {
      if (state.value) hide()
    })

    useRender(SingleTooltip)
  }

  return function () {
    if (!SingleTooltip) initTooltip()
  }
}

export const useTooltip = useTooltipFactory()
