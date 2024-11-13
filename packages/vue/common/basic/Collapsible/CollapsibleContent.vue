<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@verus-ui/common'

defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div :class="cn('overflow-y-hidden', $props.class)">
    <slot></slot>
  </div>
</template>
