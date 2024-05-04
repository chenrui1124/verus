<script setup lang="ts">
import { lorem } from 'mm3'
</script>

<template>
  <div class="flex gap-4">
    <VDialog title="对话框" subtitle="这是副标题">
      <template #trigger="{ show }">
        <VButton @click="show" variant="tonal" uppercase>打开对话框</VButton>
      </template>

      {{ lorem('sc').repeat(7) }}

      <template #actions="{ hide }">
        <VButton @click="hide" variant="tonal" uppercase>确认</VButton>
        <VButton @click="hide" variant="solid" uppercase autofocus>取消</VButton>
      </template>
    </VDialog>

    <VDialog title="对话框" subtitle="这是副标题" danger>
      <template #trigger="{ show }">
        <VButton @click="show" variant="tonal" danger uppercase>打开对话框</VButton>
      </template>

      {{ lorem('sc') }}

      <template #actions="{ hide }">
        <VButton @click="hide" danger variant="tonal" uppercase>确认</VButton>
        <VButton @click="hide" danger variant="solid" uppercase autofocus>取消</VButton>
      </template>
    </VDialog>
  </div>
</template>
