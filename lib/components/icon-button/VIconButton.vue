<script setup lang="ts">
import type { IconButtonProps } from '.'

import { Icon } from '@base'
import { useClassName } from '@composable'
import { boolAttr } from '@utils'

defineOptions({ name: 'IconButton' })

defineProps<IconButtonProps>()

const emit = defineEmits<{ click: [event?: Event] }>()

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
    :data-danger="boolAttr(danger)"
    :disabled
    class="group/v-icon-button relative inline-flex size-10 cursor-pointer items-center justify-center rounded-v1 border-none bg-transparent text-pri transition duration-300 ease-braking hover:bg-pri/8 focus:bg-pri/12 focus-visible:v-outline disabled:!text-dis disabled:v-disabled data-[danger]:text-err data-[danger]:hover:bg-err/8 data-[danger]:focus:bg-err/12 data-[danger]:focus-visible:v-outline-danger"
  >
    <Icon
      size="lg"
      :icon
      :class="[
        'transition duration-inherit ease-inherit group-active/v-icon-button:scale-75',
        cls`scale-75`
      ]"
    />
  </button>
</template>
