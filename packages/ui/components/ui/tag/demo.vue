<script setup lang="ts">
import { VTag } from '.'

const icon = 'i-ri:error-warning-fill'

const eachStatus = ['default', 'primary', 'success', 'warning', 'error'] as const
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <VTag v-for="status in eachStatus" :status :icon>Lorem, ipsum dolor.</VTag>
  </div>
</template>
