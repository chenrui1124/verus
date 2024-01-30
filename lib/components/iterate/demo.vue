<script setup lang="ts">
const each = ['solid', 'tonal', 'outlined', 'clean'] as const
</script>

<template>
  <VIterate :each="each" @next="v => console.log(v)" #="{ item, next }">
    <VButton @click="next" :variant="item" uppercase>next</VButton>
  </VIterate>
</template>
