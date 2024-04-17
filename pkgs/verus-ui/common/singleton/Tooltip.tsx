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
            <div
              style={props.coord}
              class={[
                'fixed h-0 w-0 transition-all duration-300',
                {
                  top: '-translate-y-2',
                  right: 'translate-x-2',
                  bottom: 'translate-y-2',
                  left: '-translate-x-2'
                }[props.position!]
              ]}>
              <div
                class={[
                  'pointer-events-none absolute z-30 h-8 text-nowrap rounded-v1 bg-on-bsc px-3 text-sm/8 text-bsc transition-colors duration-300 before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit',
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
                    top: 'bottom-full before:-bottom-1',
                    right: 'left-full before:-left-1',
                    bottom: 'top-full before:-top-1',
                    left: 'right-full before:-right-1'
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
      const target = evt.target as HTMLElement

      const text = target.dataset.tooltipText
      const position = target.dataset.tooltipPosition

      if (text && position) {
        props.text = text
        if (['top', 'right', 'bottom', 'left'].includes(position)) {
          props.position = position as SingleTooltipProps['position']
        }
        const rect = target.getBoundingClientRect()

        switch (props.position) {
          case 'top': {
            props.coord = {
              top: `${rect.top}px`,
              left: `${(rect.right + rect.left) / 2}px`
            }
            break
          }
          case 'right': {
            props.coord = {
              top: `${(rect.bottom + rect.top) / 2}px`,
              left: `${rect.right}px`
            }
            break
          }
          case 'bottom': {
            props.coord = {
              top: `${rect.bottom}px`,
              left: `${(rect.right + rect.left) / 2}px`
            }
            break
          }
          case 'left': {
            props.coord = {
              top: `${(rect.bottom + rect.top) / 2}px`,
              left: `${rect.left}px`
            }
            break
          }
        }

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
