<script setup lang="ts">
import type { IconButtonProps } from '.'

import { BaseIcon, htmlAttribute, useClassName, withPrefix } from '@verus-ui/common'

defineOptions({ name: withPrefix('IconButton') })

defineProps<IconButtonProps>()

const emit = defineEmits<{ click: [payload?: Event] }>()

const [cls, activate] = useClassName()

function onClick(e: Event) {
  activate(150)
  emit('click', e)
}
</script>

<template>
  <button
    @click="onClick"
    type="button"
    :data-danger="htmlAttribute(danger)"
    :disabled
    class="group/icon-button relative inline-flex size-10 cursor-pointer items-center justify-center rounded-v1 border-none bg-transparent text-pri transition duration-300 ease-braking hover:bg-pri/8 focus:bg-pri/12 focus-visible:v-outline disabled:!text-dis disabled:v-disabled data-[danger]:text-err data-[danger]:hover:bg-err/8 data-[danger]:focus:bg-err/12 data-[danger]:focus-visible:v-outline-danger"
  >
    <BaseIcon
      :name="icon"
      size="lg"
      :class="[
        'transition duration-300 ease-braking group-active/icon-button:scale-75',
        cls`scale-75`
      ]"
    />
  </button>
</template>
