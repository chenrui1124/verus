<script setup lang="ts">
const position = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <VIterate :each="position" #="{ item, next }">
    <VTooltip label="It's Tooltip" :position="item">
      <VButton @click="next" uppercase>{{ item }}</VButton>
    </VTooltip>
  </VIterate>
</template>
