<script setup lang="ts">
import { DisplayStand } from '@verus-ui/common'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'disabled', type: 'boolean' },
      { name: 'danger', type: 'boolean' }
    ]"
    #="{ props }"
  >
    <VIconButton v-bind="props" @click="() => void 0" icon="i-ri-delete-back-2-fill" />
  </DisplayStand>
</template>
