<script setup lang="ts">
import type { BreadcrumbsModel, BreadcrumbsProps } from '.'

import { computed } from 'vue'
import { Icon } from '@base'

defineOptions({ name: 'Breadcrumbs' })

const { each } = defineProps<BreadcrumbsProps>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { text: i, value: i } : i)))

const modelValue = defineModel<BreadcrumbsModel['modelValue']>({ default: undefined })
</script>

<template>
  <div
    class="inline-flex flex-wrap gap-2"
    :class="{ '*:cursor-pointer *:select-none': selectable }"
  >
    <component
      v-for="(item, index) in _each"
      :key="index"
      :is="selectable ? 'label' : 'span'"
      class="relative inline-flex h-7 items-center justify-center gap-2 rounded-v1 border-v1 border-solid border-otl bg-bsc px-3 text-sm text-on-bsc transition-all duration-300 v-outline-none has-[:checked]:border-transparent has-[:checked]:bg-pri-var has-[:checked]:text-on-pri-var has-[:focus-visible]:v-outline"
    >
      <input
        v-if="selectable"
        type="checkbox"
        v-model="modelValue"
        :value="item.value"
        class="absolute inset-0 -z-10 m-auto outline-none"
      />

      <Icon
        v-if="item.icon"
        :icon="item.icon"
        size="sm"
        class="-ml-1 transition-colors duration-300"
      />

      {{ item.text }}
    </component>
  </div>
</template>
