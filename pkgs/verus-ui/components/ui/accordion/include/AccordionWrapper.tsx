import type { FunctionalComponent, HTMLAttributes } from 'vue'

import { twMerge } from 'tailwind-merge'

interface AccordionWrapperProps extends HTMLAttributes {}

const AccordionWrapper: FunctionalComponent<AccordionWrapperProps, {}, { default: void }> = (
  { style, class: className },
  { slots }
) => {
  return (
    <div
      style={style}
      class={twMerge(
        'grid grid-cols-1 grid-rows-[min-content_0fr] overflow-y-hidden transition-all has-[:checked]/:grid-rows-[min-content_1fr]',
        className
      )}
    >
      {slots.default?.()}
    </div>
  )
}

AccordionWrapper.props = ['style', 'class']

AccordionWrapper.displayName = 'AccordionWrapper'

export default AccordionWrapper
