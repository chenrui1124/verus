<script setup lang="ts">
import { ref } from 'vue'
import { lorem } from 'mm3'
import { VSwitch } from '..'
import { VCard } from '.'

const danger = ref()
</script>

<template>
  <div class="flex gap-4 max-sm:flex-col">
    <VCard
      v-for="i in <const>['solid', 'outlined']"
      :variant="i"
      image="https://publicdomainarchive.com/wp-content/uploads/2017/09/free-stock-photos-public-domain-images-013-1000x667.jpg"
      title="Lorem"
      subtitle="Lorem ipsum dolor sit"
      :danger
    >
      {{ lorem() }}
    </VCard>
    <VSwitch v-model="danger" />
  </div>
</template>
