<script setup lang="ts">
import type { BreadcrumbsModel, BreadcrumbsProps } from '.'

defineOptions({ name: 'Breadcrumbs' })

defineProps<BreadcrumbsProps>()

const modelValue = defineModel<BreadcrumbsModel['modelValue']>({ default: undefined })
</script>

<template>
  <div class="inline-flex flex-wrap gap-2">
    <component
      :is="selectable ? 'label' : 'span'"
      v-for="(item, index) in each"
      :key="index"
      class="relative inline-block h-7 rounded-v1 px-3 text-sm leading-7 transition-all duration-300 v-outline-none v-border has-[:focus-visible]:v-outline"
      :class="[
        { 'cursor-pointer': selectable },
        modelValue && modelValue?.includes(item)
          ? 'border-transparent bg-pri-var text-on-pri-var'
          : 'border-otl bg-bsc text-on-bsc'
      ]"
    >
      <input
        type="checkbox"
        :value="item"
        v-if="selectable"
        v-model="modelValue"
        class="absolute left-0 top-0 -z-10 outline-none"
      />
      {{ item }}
    </component>
  </div>
</template>
