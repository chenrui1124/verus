import type { FunctionalComponent } from 'vue'
import type { CardProps, CardSlots } from '.'

import { withPrefix, useLiteralsProp, htmlAttribute } from '@verus-ui/common'

const Card: FunctionalComponent<CardProps, {}, CardSlots> = (
  { title, subtitle, image, danger, variant, width },
  { slots }
) => (
  <div
    style={{ width }}
    data-danger={htmlAttribute(danger)}
    class={[
      'relative box-border flex flex-col gap-4 rounded-v3 p-6 transition-colors duration-300 *:duration-inherit',
      variant === 'solid'
        ? 'bg-pri-ctr'
        : 'bg-bsc before:v-shade before:border-1.2 before:border-solid before:border-pri'
    ]}
  >
    {image && <img src={image} class='-mx-6 -mt-6 rounded-t-inherit' />}
    {title && <div class={['text-2xl text-pri', image && '-mt-1']}>{title}</div>}
    {subtitle && <div class='-mt-2 pl-px text-sm text-otl'>{subtitle}</div>}
    <div class='text-sm/6 text-on-bsc'>{slots.default?.()}</div>
  </div>
)

Card.props = {
  image: String,
  title: String,
  subtitle: String,
  variant: useLiteralsProp<CardProps['variant']>({
    default: 'solid',
    optional: ['solid', 'outlined']
  }),
  danger: Boolean,
  width: {
    type: String,
    default: '16rem'
  }
}

Card.displayName = withPrefix('Card')

export default Card
