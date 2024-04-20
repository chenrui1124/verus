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
      }
    ]"
    #="{ props }"
  >
    <VSegmentedButton
      :each="[
        { label: 'Windows', value: 'win', icon: 'i-ri-windows-fill' },
        { label: 'Android', value: 'and', icon: 'i-ri-android-fill' },
        'IOS'
      ]"
      v-bind="props"
      v-model="modelValue"
    />
  </DisplayStand>
</template>
