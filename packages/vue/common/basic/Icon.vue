<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { SizeProp } from '@verus-ui/ts'

import { useAttrs } from 'vue'
import { Size } from '@verus-ui/ts'
import { cn } from '@verus-ui/common'

defineOptions({ inheritAttrs: false })

const { size = Size.Md } = defineProps<{
  name: string
  size?: SizeProp
}>()

const { class: className, ...othersAttrs } = useAttrs()
</script>

<template>
  <span
    :="othersAttrs"
    :class="
      cn(
        name,
        'pointer-events-none inline-block',
        {
          sm: 'min-h-4 min-w-4',
          md: 'min-h-5 min-w-5',
          lg: 'min-h-6 min-w-6',
          xl: 'min-h-7 min-w-7'
        }[size!],
        className as HTMLAttributes['class']
      )
    "
  ></span>
</template>
