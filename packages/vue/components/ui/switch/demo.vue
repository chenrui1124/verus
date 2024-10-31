<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@verus-ui/common'

const value = ref()
</script>

<template>
  <DisplayStand :options="[{ name: 'disabled', type: 'boolean' }]" #="{ props }">
    <VSwitch v-bind="props" v-model="value" />
  </DisplayStand>
</template>
