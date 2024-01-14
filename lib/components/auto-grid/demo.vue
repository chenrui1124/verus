<script setup lang="ts">
import { VAutoGrid } from '.'
</script>

<template>
  <VAutoGrid item-width="2.5rem" width="20rem">
    <div class="size-10 bg-on-bsc" v-for="_ in 20" />
  </VAutoGrid>
</template>
