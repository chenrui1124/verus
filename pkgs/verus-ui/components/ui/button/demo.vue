<script setup lang="ts">
import { DisplayStand } from '@verus-ui/common'

const icon = 'i-ri-square-fill'
</script>

<template>
  <DisplayStand
    :options="[
      { name: 'variant', type: 'literal', value: ['solid', 'outlined', 'tonal', 'clean'] },
      { name: 'danger', type: 'boolean' },
      { name: 'loading', type: 'boolean' },
      { name: 'disabled', type: 'boolean' },
      { name: 'uppercase', type: 'boolean' },
      { name: 'icon', type: 'toggle', value: icon },
      { name: 'appendIcon', type: 'toggle', value: icon }
    ]"
    #="{ props }"
  >
    <div class="flex gap-6">
      <VButton v-bind="props">按钮</VButton>
      <VButton v-bind="props">Button</VButton>
    </div>
  </DisplayStand>
</template>
