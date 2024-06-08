import type { AccordionProps } from '.'

import { defineComponent } from 'vue'
import { BasicIcon, useLiteralsProp, withPrefix } from '@verus-ui/common'
import { AccordionBody, AccordionTitle, AccordionWrapper } from './include'

const Accordion = defineComponent<AccordionProps>(
  (props, { slots }) => {
    return () => {
      const { init, icon, title, width, status, variant } = props

      return (
        <AccordionWrapper
          data-status={status}
          style={{ width }}
          class={[
            'group/accordion relative box-border rounded-v2 border-1.2 duration-500 ease-braking',
            variant === 'solid'
              ? 'bg-pri-ctr data-[status=error]:bg-err-ctr'
              : 'bg-bsc before:v-shade before:border-1.2 before:border-solid before:border-pri before:transition-colors before:duration-inherit before:ease-inherit data-[status=error]:before:border-err'
          ]}
        >
          <AccordionTitle
            init={init}
            class={[
              'flex h-12 cursor-pointer select-none items-center gap-4 rounded-inherit px-6 text-base text-pri transition-all duration-300 after:i-[solar--alt-arrow-right-linear] after:-mr-1 after:ml-auto after:min-h-5 after:min-w-5 after:transition after:duration-300 has-[:checked]:h-14 has-[:checked]:after:rotate-90 group-data-[status=error]/accordion:text-err',
              variant === 'solid'
                ? 'hover:bg-pri/8 group-data-[status=error]/accordion:hover:bg-err/8'
                : 'hover:bg-pri-ctr group-data-[status=error]/accordion:hover:bg-err-ctr'
            ]}
          >
            {icon && <BasicIcon name={icon} class='-ml-1' />}
            {title}
          </AccordionTitle>

          <AccordionBody
            class={[
              'rounded-b-v2 text-sm/6 transition-colors duration-300',
              'box-border',
              variant === 'solid'
                ? 'text-on-pri-var group-data-[status=error]/accordion:text-on-err-var'
                : 'text-on-bsc'
            ]}
          >
            <div class='px-6 pb-6 pt-4'>{slots.default?.()}</div>
          </AccordionBody>
        </AccordionWrapper>
      )
    }
  },
  {
    name: withPrefix('Accordion'),
    props: {
      init: Boolean,
      icon: String,
      title: String,
      status: useLiteralsProp<AccordionProps['status']>({
        default: 'normal',
        optional: ['normal', 'error']
      }),
      variant: useLiteralsProp<AccordionProps['variant']>({
        default: 'solid',
        optional: ['solid', 'outlined']
      }),
      width: String
    }
  }
)

export default Accordion
