<script setup lang="ts">
import { ref } from 'vue'
import { DisplayStand } from '@verus-ui/common'

const modelValue = ref()
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'outlined'] },
      { name: 'disabled', type: 'boolean' },
      { name: 'clearable', type: 'boolean' },
      { name: 'secret', type: 'boolean' },
      { name: 'icon', type: 'toggle', value: 'i-ri-key-2-fill' }
    ]"
    #="{ props }"
  >
    <VTextField v-model="modelValue" v-bind="props" />
  </DisplayStand>
</template>
