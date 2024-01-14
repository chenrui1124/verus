<script setup lang="ts">
import { lorem } from 'mm3'
import { VAccordion } from '.'
</script>

<template>
  <div class="flex flex-col gap-2">
    <VAccordion title="Accordion" width="24rem" variant="solid">
      {{ lorem() }}
    </VAccordion>

    <VAccordion title="Accordion" width="24rem">
      {{ lorem() }}
    </VAccordion>

    <VAccordion title="Accordion" width="24rem" variant="solid" danger>
      {{ lorem() }}
    </VAccordion>

    <VAccordion title="Accordion" width="24rem" danger>
      {{ lorem() }}
    </VAccordion>
  </div>
</template>
