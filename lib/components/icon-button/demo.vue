<script setup lang="ts">
import { VIconButton } from '.'

const icon = 'i-solar:download-square-bold-duotone'
</script>

<template>
  <div class="flex gap-4">
    <VIconButton :icon />
    <VIconButton :icon danger />
    <VIconButton :icon disabled />
    <VIconButton :icon danger disabled />
  </div>
</template>
