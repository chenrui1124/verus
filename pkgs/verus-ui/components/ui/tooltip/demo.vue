<script setup lang="ts">
const position = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex gap-2">
    <VTooltip v-for="i in position" :text="i.toLocaleUpperCase()" :position="i">
      <VButton> {{ i.toLocaleUpperCase() }} </VButton>
    </VTooltip>
  </div>
</template>
