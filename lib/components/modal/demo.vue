<script setup lang="ts">
import { lorem } from 'mm3'
</script>

<template>
  <div class="flex gap-4">
    <VModal title="模态框" subtitle="这是副标题">
      <template #trigger="{ open }">
        <VButton @click="open" variant="tonal" uppercase>打开模态框</VButton>
      </template>

      {{ lorem('sc').repeat(7) }}

      <template #actions="{ close }">
        <VButton @click="close" variant="tonal" uppercase>确认</VButton>
        <VButton @click="close" variant="solid" uppercase>取消</VButton>
      </template>
    </VModal>

    <VModal title="模态框" subtitle="这是副标题" danger>
      <template #trigger="{ open }">
        <VButton @click="open" variant="tonal" danger uppercase>打开模态框</VButton>
      </template>

      {{ lorem('sc') }}

      <template #actions="{ close }">
        <VButton @click="close" danger variant="tonal" uppercase>确认</VButton>
        <VButton @click="close" danger variant="solid" uppercase>取消</VButton>
      </template>
    </VModal>
  </div>
</template>
