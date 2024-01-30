<script setup lang="ts">
import { lorem } from 'mm3'
import { DisplayStand } from '@utils'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'outlined'] },
      { name: 'danger', type: 'boolean' },
      {
        name: 'image',
        type: 'toggle',
        value: 'https://image.meiye.art/pic_1629273084446fKuKDwYIFO1Cybi2wrrRV'
      },
      { name: 'width', type: 'string', init: '16rem' }
    ]"
    #="{ props }"
  >
    <VCard title="卡片" subtitle="这是副标题" v-bind="props">
      {{ lorem('sc') }}
    </VCard>
  </DisplayStand>
</template>
