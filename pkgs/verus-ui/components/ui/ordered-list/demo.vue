<script setup lang="ts">
import { lorem } from 'mm3'
</script>

<template>
  <VOrderedList class="w-96">
    <li v-for="_ in 3">Lorem ipsum dolor sit amet.</li>
    <li>{{ lorem() }}</li>
    <li>{{ lorem('sc') }}</li>
  </VOrderedList>
</template>
