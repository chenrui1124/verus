<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@verus-ui/common'

defineProps<{
  checked?: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label :class="cn($props.class)">
    <input
      data-name="CollapsibleTriggerCheckbox"
      type="checkbox"
      tabindex="-1"
      class="peer hidden"
      :checked="checked"
    />
    <slot></slot>
  </label>
</template>
