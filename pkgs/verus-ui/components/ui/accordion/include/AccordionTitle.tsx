import type { FunctionalComponent, HTMLAttributes } from 'vue'

import { twMerge } from 'tailwind-merge'

interface AccordionTitleProps extends HTMLAttributes {
  init?: boolean
}

const AccordionTitle: FunctionalComponent<AccordionTitleProps, {}, { default: void }> = (
  { init, style, class: className },
  { slots }
) => {
  return (
    <label style={style} class={twMerge(className as HTMLAttributes['class'])}>
      {slots.default?.()}
      <input type='checkbox' tabindex='-1' class='hidden' checked={init} />
    </label>
  )
}

AccordionTitle.props = {
  init: Boolean,
  style: [String, Object],
  class: [String, Object, Array]
}

AccordionTitle.displayName = 'AccordionTitle'

export default AccordionTitle
