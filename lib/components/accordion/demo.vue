<script setup lang="ts">
import { lorem } from 'mm3'
import { VAccordion } from '.'
</script>

<template>
  <div class="flex flex-col gap-2">
    <VAccordion title="折叠面板" width="24rem" variant="solid">
      {{ lorem('sc') }}
    </VAccordion>

    <VAccordion title="折叠面板" width="24rem">
      {{ lorem('sc') }}
    </VAccordion>

    <VAccordion title="折叠面板" width="24rem" variant="solid" danger>
      {{ lorem('sc') }}
    </VAccordion>

    <VAccordion title="折叠面板" width="24rem" danger>
      {{ lorem('sc') }}
    </VAccordion>
  </div>
</template>
