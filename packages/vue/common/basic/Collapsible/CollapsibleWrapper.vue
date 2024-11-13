<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@verus-ui/common'

defineProps<{ class: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      cn(
        'grid grid-cols-1 grid-rows-[min-content_0fr] overflow-y-hidden transition-all has-[[data-name=CollapsibleTriggerCheckbox]:checked]/:grid-rows-[min-content_1fr]',
        $props.class
      )
    "
  >
    <slot></slot>
  </div>
</template>
