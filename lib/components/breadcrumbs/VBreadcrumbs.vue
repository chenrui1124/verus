<script setup lang="ts">
import { Icon } from '@base'
import type { BreadcrumbsModel, BreadcrumbsProps } from '.'

defineOptions({ name: 'Breadcrumbs' })

defineProps<BreadcrumbsProps>()

const modelValue = defineModel<BreadcrumbsModel['modelValue']>({ default: undefined })
</script>

<template>
  <div class="inline-flex flex-wrap gap-2">
    <component
      :is="selectable ? 'label' : 'span'"
      v-for="(item, index) in each.map(v => (typeof v == 'string' ? { text: v, value: v } : v))"
      :key="index"
      class="relative inline-flex h-7 items-center justify-center gap-2 rounded-v1 px-3 transition-all duration-300 v-outline-none v-border has-[:focus-visible]:v-outline"
      :class="[
        { 'cursor-pointer select-none': selectable },
        modelValue && modelValue?.includes(item.value)
          ? 'border-transparent bg-pri-var text-on-pri-var'
          : 'border-otl bg-bsc text-on-bsc'
      ]"
    >
      <input
        type="checkbox"
        :value="item.value"
        v-if="selectable"
        v-model="modelValue"
        class="absolute left-0 top-0 -z-10 outline-none"
      />
      <Icon v-if="item.icon" :i="item.icon" size="sm" class="-ml-1 duration-inherit" />
      <span class="pointer-events-none text-sm text-inherit duration-inherit">{{ item.text }}</span>
    </component>
  </div>
</template>
