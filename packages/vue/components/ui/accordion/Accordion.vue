<script lang="ts">
import type { VariantProp } from '@verus-ui/ts'

import {
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWrapper,
  htmlAttribute,
  Icon,
  withPrefix
} from '@verus-ui/common'

export interface AccordionProps {
  danger?: boolean
  icon?: string
  init?: boolean
  label?: string
  /**
   * @default 'solid'
   */
  variant?: VariantProp<'solid' | 'outlined'>
  width?: string
}
</script>

<script lang="ts" setup>
defineOptions({ name: withPrefix('Accordion') })

const { variant = 'solid' } = defineProps<AccordionProps>()
</script>

<template>
  <CollapsibleWrapper
    :data-danger="htmlAttribute(danger)"
    :style="{ width }"
    :class="[
      'relative box-border rounded-v2 border-1.2 border-solid font-sans duration-500 ease-braking',
      variant === 'solid' ? 'border-transparent bg-pri-ctr' : 'border-pri bg-bsc'
    ]"
  >
    <CollapsibleTrigger
      :class="[
        'flex h-12 cursor-pointer select-none items-center gap-4 rounded-inherit px-6 text-base text-pri transition-all duration-300 has-[:checked]:h-14',
        variant === 'solid' ? 'hover:bg-pri/8' : 'hover:bg-pri-ctr'
      ]"
      :checked="init"
    >
      <Icon v-if="icon" :name="icon" class="-ml-1" />{{ label }}

      <Icon
        name="i-[solar--alt-arrow-right-linear]"
        class="-mr-1 ml-auto transition duration-300 peer-[:checked]:rotate-90"
      />
    </CollapsibleTrigger>

    <CollapsibleContent
      :class="[
        'rounded-b-v2 text-sm/6 transition-colors duration-300',
        'box-border',
        variant === 'solid' ? 'text-on-pri-var' : 'text-on-bsc'
      ]"
    >
      <div class="px-6 pb-6 pt-4">
        <slot></slot>
      </div>
    </CollapsibleContent>
  </CollapsibleWrapper>
</template>
