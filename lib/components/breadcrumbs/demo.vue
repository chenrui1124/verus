<script setup lang="ts">
import { ref } from 'vue'
import { VBreadcrumbs } from '.'

const each = [
  { icon: 'i-ri-windows-fill', text: 'Windows', value: 'windows' },
  { icon: 'i-ri-android-fill', text: 'Android', value: 'android' },
  { icon: 'i-ri-apple-fill', text: 'IOS', value: 'ios' }
] as const

const modelValue = ref([])
</script>

<template>
  <div class="">
    <VBreadcrumbs :each="each" v-model="modelValue" selectable />
  </div>
</template>
