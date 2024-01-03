<script setup lang="ts">
import { lorem } from 'mm3'
import { VButton } from '..'
import { VModal } from '.'
</script>

<template>
  <div class="flex gap-4">
    <VModal title="RENAME" subtitle="You open this modal.">
      <template #trigger="{ open }">
        <VButton @click="open" variant="tonal" uppercase>Open Modal</VButton>
      </template>

      {{ lorem().repeat(7) }}

      <template #actions="{ close }">
        <VButton @click="close" variant="tonal" uppercase>confirm</VButton>
        <VButton @click="close" variant="solid" uppercase>cancel</VButton>
      </template>
    </VModal>

    <VModal title="DELETE" subtitle="You open this modal." danger>
      <template #trigger="{ open }">
        <VButton @click="open" variant="tonal" danger uppercase>Open Modal</VButton>
      </template>

      {{ lorem() }}

      <template #actions="{ close }">
        <VButton @click="close" danger variant="tonal" uppercase>confirm</VButton>
        <VButton @click="close" danger variant="solid" uppercase>cancel</VButton>
      </template>
    </VModal>
  </div>
</template>
