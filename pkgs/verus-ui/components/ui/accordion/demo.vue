<script setup lang="ts">
import { lorem } from 'mm3'
import { DisplayStand } from '@verus-ui/common'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'outlined'] },
      { name: 'danger', type: 'boolean' },
      { name: 'width', type: 'string', init: '24rem' }
    ]"
    #="{ props }"
  >
    <VAccordion title="折叠面板" v-bind="props">
      {{ lorem('sc') }}
    </VAccordion>
  </DisplayStand>
</template>
