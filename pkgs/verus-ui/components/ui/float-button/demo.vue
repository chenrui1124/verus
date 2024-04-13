<script setup lang="ts">
import { DisplayStand } from '@verus-ui/common'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'tonal'] },
      { name: 'disabled', type: 'boolean' },
      { name: 'absolute', type: 'boolean' }
    ]"
    #="{ props }"
  >
    <div class="h-48 w-72">
      <VFloatButton icon="i-ri:add-fill" v-bind="props" />
    </div>
  </DisplayStand>
</template>
