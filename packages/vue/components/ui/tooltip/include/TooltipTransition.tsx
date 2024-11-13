import type { SetupContext, TransitionProps } from 'vue'
import type { PositionProp } from '@verus-ui/ts'

import { Transition } from 'vue'
import { Position } from '@verus-ui/ts'
import { twMerge } from 'tailwind-merge'

interface TooltipTransitionProps extends TransitionProps {
  position: PositionProp
}

function TooltipTransition(
  { position, enterFromClass, leaveToClass, ...otherProps }: TooltipTransitionProps,
  { slots }: SetupContext
) {
  const cls = {
    [Position.Top]: 'translate-y-1',
    [Position.Right]: '-translate-x-1',
    [Position.Bottom]: '-translate-y-1',
    [Position.Left]: 'translate-x-1'
  }[position]

  return (
    <Transition
      enterFromClass={twMerge(cls, enterFromClass, 'opacity-0')}
      leaveToClass={twMerge(cls, leaveToClass, 'opacity-0')}
      {...otherProps}
    >
      {slots.default?.()}
    </Transition>
  )
}

export default TooltipTransition
