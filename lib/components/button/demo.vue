<script setup lang="ts">
import { ref } from 'vue'
import { VButton } from '.'

const loading = ref()

const variant = ['solid', 'tonal', 'outlined', 'clean'] as const
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <VButton
        v-for="v in variant"
        :variant="v"
        text="button"
        uppercase
        @click="loading = !loading"
      />
    </div>

    <div class="flex gap-2">
      <VButton v-for="v in variant" :variant="v" text="button" uppercase danger />
    </div>

    <div class="flex gap-2">
      <VButton v-for="v in variant" :variant="v" text="button" uppercase disabled />
    </div>

    <div class="flex gap-2">
      <VButton v-for="v in variant" :variant="v" text="button" uppercase :loading danger />
    </div>
  </div>
</template>
