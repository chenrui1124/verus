<script setup lang="ts">
const modelValue = defineModel<-1 | 0 | 1>({ required: true })

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :class="[
      'relative transition-all duration-300',
      {
        'sm:basis-0': modelValue == 0,
        'max-sm:basis-0 sm:basis-[17rem]': Math.abs(modelValue) == 1
      }
    ]"
  >
    <aside
      :class="[
        'absolute inset-y-0 left-0 box-border bg-pri-ctr p-4 transition-all max-sm:w-[calc(100vw_-_6rem)] sm:w-[17rem]',
        {
          'max-sm:pointer-events-none': modelValue == -1,
          'pointer-events-none max-sm:-translate-x-full': modelValue == 0
        }
      ]"
    >
      <slot />
    </aside>
  </div>
</template>
