<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@utils'

const modelValue = ref([])
</script>

<template>
  <DisplayStand :options="[{ name: 'selectable', type: 'boolean' }]" #="{ props }">
    <VBreadcrumbs
      :each="[
        { icon: 'i-ri-windows-fill', text: 'Windows', value: 'windows' },
        { icon: 'i-ri-android-fill', text: 'Android', value: 'android' },
        { icon: 'i-ri-apple-fill', text: 'IOS', value: 'ios' }
      ]"
      v-model="modelValue"
      v-bind="props"
    />
  </DisplayStand>
</template>
