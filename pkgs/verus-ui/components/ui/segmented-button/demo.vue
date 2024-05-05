<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@verus-ui/common'

const modelValue = ref()
</script>

<template>
  <DisplayStand
    :options="[
      {
        name: 'direction',
        type: 'literal',
        value: ['horizontal', 'vertical']
      },
      {
        name: 'uniformWidth',
        type: 'boolean'
      }
    ]"
    #="{ props }"
  >
    <VSegmentedButton
      :each="[
        { label: '视窗', value: 'win', icon: 'i-ri-windows-fill' },
        { label: '安卓', value: 'and', icon: 'i-ri-android-fill' },
        '苹果'
      ]"
      v-bind="props"
      v-model="modelValue"
    />
  </DisplayStand>
</template>
