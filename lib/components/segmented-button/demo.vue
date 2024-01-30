<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@utils'

const modelValue = ref()
</script>

<template>
  <DisplayStand
    :options="[
      {
        name: 'direction',
        type: 'literal',
        value: ['row', 'col']
      }
    ]"
    #="{ props }"
  >
    <VSegmentedButton
      :each="[
        { text: 'Windows', value: 'win', icon: 'i-ri-windows-fill' },
        { text: 'Android', value: 'and', icon: 'i-ri-android-fill' },
        'IOS'
      ]"
      v-bind="props"
      v-model="modelValue"
    />
  </DisplayStand>
</template>
