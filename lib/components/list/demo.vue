<script setup lang="ts">
import { VList } from '.'

const each = [
  { icon: 'i-ri-windows-fill', text: 'Windows', value: 'win', children: ['95', '98'] },
  'Linux',
  'MacOS'
]
</script>

<template>
  <div class="w-80">
    <VList :each="each" />
  </div>
</template>
