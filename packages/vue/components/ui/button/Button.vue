<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { FontWeightProp, TextTransformProp, VariantProp } from '@verus-ui/ts'

import { computed, useAttrs } from 'vue'
import { FontWeight, TextTransform, Variant } from '@verus-ui/ts'
import { Icon, cn, htmlAttribute, withPrefix } from '@verus-ui/common'

export interface ButtonProps {
  appendIcon?: string
  block?: boolean
  danger?: boolean
  disabled?: boolean
  fontWeight?: FontWeightProp
  icon?: string
  label?: string
  loading?: boolean
  textTransform?: TextTransformProp
  /**
   * @default 'tonal'
   */
  variant?: VariantProp
}
</script>

<script setup lang="ts">
defineOptions({ inheritAttrs: false, name: withPrefix('Button') })

const {
  variant = Variant.Tonal,
  fontWeight = FontWeight.Medium,
  loading
} = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [evt: MouseEvent] }>()

const listener = computed(() => {
  return href ? {} : { click: (payload: MouseEvent) => void (loading || emit('click', payload)) }
})

const { class: className, href, ...othersAttrs } = useAttrs()
</script>

<template>
  <component
    @="listener"
    :="othersAttrs"
    :is="href ? 'a' : 'button'"
    :disabled="disabled"
    :type="htmlAttribute('button', !href)"
    :tabindex="htmlAttribute('-1', loading)"
    :href="htmlAttribute(href, !!href)"
    :data-danger="htmlAttribute(danger)"
    :class="
      cn(
        block ? 'flex' : 'inline-flex',
        'relative box-border h-9 cursor-pointer items-center justify-center gap-2 rounded-v1 border-none px-5 text-sm/9 tracking-wide transition duration-300',
        'before:v-shade before:transition before:duration-300',
        'focus-visible:v-outline',
        'disabled:pointer-events-none disabled:select-none disabled:text-on-bsc disabled:opacity-48',
        {
          [Variant.Solid]:
            'bg-pri text-on-pri before:border-1.2 before:border-solid before:border-on-bsc/16 hover:before:bg-bsc/8 focus:text-on-pri/72 focus:before:border-transparent focus:before:bg-on-bsc/12',
          [Variant.Tonal]:
            'bg-pri-var text-on-pri-var hover:before:bg-on-bsc/8 focus:before:bg-on-bsc/12',
          [Variant.Outlined]:
            'bg-bsc before:border-1.2 before:border-solid before:border-otl focus:before:border-current',
          [Variant.Clean]:
            'border-1.2 !border-solid border-transparent bg-transparent !bg-clip-border !outline-1 !outline-offset-0 !outline-on-bsc'
        }[variant],
        {
          'no-underline': href,
          'pointer-events-none': loading,
          'disabled:bg-dis': [Variant.Solid, Variant.Tonal].includes(variant as Variant),
          'text-pri hover:before:bg-pri/8 focus:before:bg-pri/12': [
            Variant.Outlined,
            Variant.Clean
          ].includes(variant as Variant)
        },
        {
          [FontWeight.Normal]: 'font-normal',
          [FontWeight.Medium]: 'font-medium',
          [FontWeight.Bold]: 'font-bold',
          [FontWeight.Semibold]: 'font-semibold'
        }[fontWeight],
        textTransform &&
          {
            [TextTransform.Capitalize]: 'capitalize',
            [TextTransform.Lowercase]: 'lowercase',
            [TextTransform.Uppercase]: 'uppercase'
          }[textTransform],
        className as HTMLAttributes['class']
      )
    "
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="['-ml-2', { 'text-transparent transition duration-300': !disabled && loading }]"
    />

    <span
      :class="[
        'pointer-events-none',
        { 'text-transparent transition duration-300': !disabled && loading }
      ]"
    >
      <slot>{{ label }}</slot>
    </span>

    <Icon
      v-if="appendIcon"
      :name="appendIcon"
      :class="['-mr-1', { 'text-transparent transition duration-300': !disabled && loading }]"
    />

    <Transition enterFromClass="opacity-0" leaveToClass="opacity-0">
      <Icon
        v-if="!disabled && loading"
        name="i-[svg-spinners--ring-resize]"
        class="absolute inset-0 m-auto transition duration-300"
      />
    </Transition>
  </component>
</template>
