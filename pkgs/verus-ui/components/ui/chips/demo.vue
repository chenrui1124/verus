<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@verus-ui/common'

const modelValue = ref([])
</script>

<template>
  <DisplayStand :options="[{ name: 'selectable', type: 'boolean' }]" #="{ props }">
    <VChips
      :each="[
        { icon: 'i-ri-windows-fill', label: 'Windows', value: 'windows' },
        { icon: 'i-ri-android-fill', label: 'Android', value: 'android' },
        { icon: 'i-ri-apple-fill', label: 'IOS', value: 'ios' }
      ]"
      v-model="modelValue"
      v-bind="props"
    />
  </DisplayStand>
</template>
