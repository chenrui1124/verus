<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@verus-ui/common'

const model = ref()
</script>

<template>
  <DisplayStand :options="[{ name: 'width', type: 'string', init: '20rem' }]" #="{ props }">
    <VRadios
      :each="[
        { icon: 'i-ri:windows-fill', label: 'Windows', value: 'windows' },
        { icon: 'i-ri:android-fill', label: 'Android', value: 'android' },
        { icon: 'i-ri:apple-fill', label: 'IOS', value: 'ios' }
      ]"
      v-model="model"
      v-bind="props"
    />
  </DisplayStand>
</template>
