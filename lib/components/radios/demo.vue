<script setup lang="ts">
import { ref } from 'vue'
import { VRadios } from '.'

const each = [
  { icon: 'i-ri:windows-fill', text: 'Windows', value: 'windows' },
  { icon: 'i-ri:android-fill', text: 'Android', value: 'android' },
  { icon: 'i-ri:apple-fill', text: 'IOS', value: 'ios' }
]

const model = ref()
</script>

<template>
  <VRadios :each="each" v-model="model" width="20rem" />
</template>
