<script setup lang="ts">
import { lorem } from 'mm3'
import { VAccordion } from '.'
</script>

<template>
  <div style="width: 24rem">
    <VAccordion title="手风琴">
      {{ lorem('sc') }}
    </VAccordion>
  </div>
</template>
