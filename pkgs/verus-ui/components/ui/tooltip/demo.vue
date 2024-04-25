<script setup lang="ts">
const position = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex gap-2">
    <VTooltip v-for="i in position" :label="i.toLocaleUpperCase()" :position="i">
      <VButton> {{ i.toLocaleUpperCase() }} </VButton>
    </VTooltip>
  </div>

  <v-tooltip position="123" label="lorem">
    <v-button>HELLO</v-button>
  </v-tooltip>
</template>
