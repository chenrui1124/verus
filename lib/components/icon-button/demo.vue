<script setup lang="ts">
import { DisplayStand } from '@utils'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'disabled', type: 'boolean' },
      { name: 'danger', type: 'boolean' }
    ]"
    #="props"
  >
    <VIconButton v-bind="props" icon="i-ri-delete-back-2-fill" />
  </DisplayStand>
</template>
