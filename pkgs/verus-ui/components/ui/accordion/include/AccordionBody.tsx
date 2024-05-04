import type { FunctionalComponent, HTMLAttributes } from 'vue'

import { twMerge } from 'tailwind-merge'

interface AccordionBodyProps extends HTMLAttributes {}

const AccordionBody: FunctionalComponent<AccordionBodyProps, {}, { default: void }> = (
  { style, class: className },
  { slots }
) => {
  return (
    <div style={style} class={twMerge('overflow-y-hidden', className as HTMLAttributes['class'])}>
      {slots.default?.()}
    </div>
  )
}

AccordionBody.props = ['style', 'class']

AccordionBody.displayName = 'AccordionBody'

export default AccordionBody
