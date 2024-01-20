<script setup lang="ts">
import type { SegmentedButtonModel, SegmentedButtonProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'

const { each, direction = 'row' } = defineProps<SegmentedButtonProps>()

const modelValue = defineModel<SegmentedButtonModel['modelValue']>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { text: i, value: i } : i)))

function select(e: Event) {
  const t = e.target as HTMLButtonElement
  const v = t.dataset.value
  v && (modelValue.value = v)
}
</script>

<template>
  <div
    @click="select"
    class="relative rounded-v1 transition-colors duration-300 before:v-shade before:border-pri before:v-border"
    :class="direction === 'row' ? 'inline-flex' : 'inline-grid grid-cols-1'"
  >
    <button
      v-for="(item, index) in _each"
      :key="index"
      :data-value="item.value"
      :data-selected="item.value === modelValue ? '' : void 0"
      class="cursor-pointer items-center border-0 border-solid border-pri bg-transparent p-0 text-otl duration-inherit v-outline-none hover:bg-pri-ctr hover:text-on-pri-var focus-visible:v-outline data-[selected]:pointer-events-none data-[selected]:bg-pri/12 data-[selected]:text-pri"
      :class="
        {
          row: 'inline-flex justify-center border-r-v1 first:rounded-l-inherit last:rounded-r-inherit last:border-r-0',
          col: 'col-span-2 inline-grid grid-cols-subgrid border-b-v1 first:rounded-t-inherit last:rounded-b-inherit last:border-b-0'
        }[direction]
      "
    >
      <Icon
        v-if="item.icon"
        :icon="item.icon"
        size="sm"
        class="-mr-2 ml-3"
        :class="{ 'col-start-1': direction === 'col' }"
      />
      <span
        class="pointer-events-none mx-4 h-9 text-left text-sm/9 duration-inherit"
        :class="{ 'col-start-2': direction === 'col' }"
      >
        {{ item.text }}
      </span>
    </button>
  </div>
</template>
