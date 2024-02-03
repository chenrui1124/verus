<script setup lang="ts">
import { lorem } from 'mm3'
</script>

<template>
  <div class="flex gap-4">
    <VModal title="模态框" subtitle="这是副标题">
      <template #trigger="{ show }">
        <VButton @click="show" variant="tonal" uppercase>打开模态框</VButton>
      </template>

      {{ lorem('sc').repeat(7) }}

      <template #actions="{ hide }">
        <VButton @click="hide" variant="solid" uppercase>取消</VButton>
        <VButton @click="hide" variant="tonal" uppercase>确认</VButton>
      </template>
    </VModal>

    <VModal title="模态框" subtitle="这是副标题" danger>
      <template #trigger="{ show }">
        <VButton @click="show" variant="tonal" danger uppercase>打开模态框</VButton>
      </template>

      {{ lorem('sc') }}

      <template #actions="{ hide }">
        <VButton @click="hide" danger variant="solid" uppercase>取消</VButton>
        <VButton @click="hide" danger variant="tonal" uppercase>确认</VButton>
      </template>
    </VModal>
  </div>
</template>
