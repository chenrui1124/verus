<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { VariantProp } from '@verus-ui/ts'

import { useAttrs } from 'vue'
import { Variant } from '@verus-ui/ts'
import { cn, Icon, useClassName, withPrefix } from '@verus-ui/common'

export interface FloatButtonProps {
  absolute?: boolean
  /**
   * @default '1.5rem'
   */
  bottom?: string
  disabled?: boolean
  icon?: string
  /**
   * @default '1.5rem'
   */
  right?: string
  /**
   * @default 'tonal'
   */
  variant?: VariantProp<'solid' | 'tonal'>
}
</script>

<script setup lang="ts">
defineOptions({ inheritAttrs: false, name: withPrefix('FloatButton') })

const { variant = 'tonal', right = '1.5rem', bottom = '1.5rem' } = defineProps<FloatButtonProps>()

const emit = defineEmits<{ click: [evt: MouseEvent] }>()

const [cls, activate] = useClassName()

function onClick(event: MouseEvent) {
  activate(150)
  emit('click', event)
}

const { class: className, ...otherAttrs } = useAttrs()
</script>

<template>
  <Teleport to="body" :disabled="absolute">
    <button
      @click="onClick"
      :="otherAttrs"
      type="button"
      :disabled
      :style="{ right, bottom }"
      :class="
        cn(
          'z-20 box-border flex size-14 cursor-pointer items-center justify-center rounded-v2 border-none drop-shadow-xl transition duration-300 ease-braking focus-visible:v-outline active:scale-90 disabled:pointer-events-none disabled:bg-dis disabled:text-on-bsc disabled:opacity-48 sm:bottom-12 sm:right-12',
          cls`scale-90`,
          absolute ? 'absolute' : 'fixed',
          variant === Variant.Tonal ? 'bg-pri-var text-on-pri-var' : 'bg-pri text-on-pri',
          className as HTMLAttributes['class']
        )
      "
    >
      <Icon v-if="icon" :name="icon" size="xl" />
    </button>
  </Teleport>
</template>
