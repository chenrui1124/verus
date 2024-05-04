<script setup lang="ts">
defineProps<{ sidebarOpen: -1 | 0 | 1 }>()

defineEmits<{ click: [] }>()
</script>

<template>
  <button
    @click="$emit('click')"
    :class="[
      'absolute left-0 top-1/2 m-1 flex h-10 w-4 -translate-y-1/2 cursor-pointer flex-col rounded-v1 border-none bg-transparent focus-visible:v-outline',
      'before:mx-auto before:-mb-0.5 before:mt-1 before:inline-block before:w-1 before:grow before:rounded-full before:bg-dis before:transition before:duration-300 hover:before:bg-on-bsc',
      'after:mx-auto after:-mt-0.5 after:mb-1 after:inline-block after:w-1 after:grow after:rounded-full after:bg-dis after:transition after:duration-300 hover:after:bg-on-bsc',
      {
        'hover:before:rotate-12 hover:after:-rotate-12': sidebarOpen == 1,
        'before:-rotate-12 after:rotate-12': sidebarOpen == 0,
        'max-sm:before:-rotate-12 max-sm:after:rotate-12 sm:hover:before:rotate-12 sm:hover:after:-rotate-12':
          sidebarOpen == -1
      }
    ]"
  ></button>
</template>
