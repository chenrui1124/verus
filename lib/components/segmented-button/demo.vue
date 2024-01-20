<script setup lang="ts">
import { VSegmentedButton } from '.'

const each = [
  { text: 'Windows', value: 'win', icon: 'i-ri-windows-fill' },
  { text: 'Android', value: 'and', icon: 'i-ri-android-fill' },
  'IOS'
]
</script>

<template>
  <div class="flex items-baseline gap-4">
    <VSegmentedButton :each="each" />

    <VSegmentedButton :each="each" direction="col" />
  </div>
</template>
