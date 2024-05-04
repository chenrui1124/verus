<script setup lang="ts">
import { lorem } from 'mm3'
import { DisplayStand } from '@verus-ui/common'
import { ref } from 'vue'

const variant = ref('solid')

setTimeout(() => (variant.value = 'outlined'), 1000)
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'outlined'] },
      { name: 'status', type: 'literal', value: ['normal', 'error'] },
      { name: 'width', type: 'string', init: '24rem' }
    ]"
    #="{ props }"
  >
    <VAccordion title="折叠面板" :="props">
      {{ lorem('sc') }}
    </VAccordion>
  </DisplayStand>
</template>
