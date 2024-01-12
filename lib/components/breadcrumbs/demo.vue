<script setup lang="ts">
import { ref } from 'vue'
import { VBreadcrumbs } from '.'

const modelValue = ref([])
</script>

<template>
  <div class="">
    <VBreadcrumbs :each="['Windows', 'Android', 'IOS']" v-model="modelValue" selectable />
  </div>
</template>
