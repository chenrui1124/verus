<script setup lang="ts">
import { VAutoGrid } from '.'
</script>

<template>
  <div class="w-80">
    <VAutoGrid min-width="2.5rem">
      <div class="size-10 bg-on-bsc" v-for="_ in 20" />
    </VAutoGrid>
  </div>
</template>
