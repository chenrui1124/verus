import { Transition } from 'vue'
import { twMerge } from 'tailwind-merge'
import { useRender, useToggle } from '@verus-ui/common'

interface BackdropProps {
  class?: string
  onClick?: (evt: MouseEvent) => void
}

function Backdrop({ class: className, onClick }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      class={twMerge(
        'fixed inset-0 z-30 bg-black/48 backdrop-blur-sm transition duration-700 ease-braking',
        className
      )}
    />
  )
}

export function useBackdrop(attach?: { class?: string; onClick?: (evt?: MouseEvent) => void }) {
  const { state, on, off } = useToggle()

  const [mount, unmount] = useRender(() => {
    function onAfterLeave() {
      unmount({ delay: 10 * 1000 })
    }

    return (
      <Transition enterFromClass='opacity-0' leaveToClass='opacity-0' onAfterLeave={onAfterLeave}>
        {state.value && <Backdrop {...attach} />}
      </Transition>
    )
  })

  return {
    show: () => {
      mount()
      on()
    },
    hide: () => off()
  }
}
