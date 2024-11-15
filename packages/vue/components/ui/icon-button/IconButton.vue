<script lang="ts">
import type { HTMLAttributes } from 'vue'

import { Icon, cn, htmlAttribute, useClassName, withPrefix } from '@verus-ui/common'
import { useAttrs } from 'vue'

export interface IconButtonProps {
  danger?: boolean
  disabled?: boolean
  icon?: string
}
</script>

<script setup lang="ts">
defineOptions({ inheritAttrs: false, name: withPrefix('IconButton') })

defineProps<IconButtonProps>()

const emit = defineEmits<{ click: [evt: Event] }>()

const [cls, activate] = useClassName()

function onClick(e: Event) {
  activate(150)
  emit('click', e)
}

const { class: className, ...otherAttrs } = useAttrs()
</script>

<template>
  <button
    @click="onClick"
    :="otherAttrs"
    type="button"
    :data-danger="htmlAttribute(danger)"
    :disabled
    :class="
      cn(
        'group/icon-button relative box-border inline-flex size-9 min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-v1 border-none bg-transparent p-0 text-pri transition duration-300 ease-braking hover:bg-pri/8 focus:bg-pri/12 focus-visible:v-outline disabled:pointer-events-none disabled:text-dis disabled:opacity-48',
        className as HTMLAttributes['class']
      )
    "
  >
    <Icon
      v-if="icon"
      :name="icon"
      size="lg"
      :class="[
        'transition duration-300 ease-braking group-active/icon-button:scale-75',
        cls`scale-75`
      ]"
    />
  </button>
</template>
