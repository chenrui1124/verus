<script setup lang="ts">
const directions = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex gap-2">
    <VTooltip v-for="i in directions" :text="i.toLocaleUpperCase()" :direction="i">
      <VButton> {{ i.toLocaleUpperCase() }} </VButton>
    </VTooltip>
  </div>
</template>
