<script setup lang="ts">
import { lorem } from 'mm3'
import { VModal } from '.'
</script>

<template>
  <VModal>
    <template #trigger="{ show }">
      <VButton @click="show">OPEN</VButton>
    </template>

    <template #default="{ hide }">
      <p>{{ lorem('sc') }}</p>
      <VButton @click="hide">CLOSE</VButton>
    </template>
  </VModal>
</template>
