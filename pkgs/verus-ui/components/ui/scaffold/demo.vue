<script setup lang="ts">
import { VScaffold } from '.'
</script>

<template>
  <VScaffold resizable>
    <template #header="{ toggleSidebar }">
      <VIconButton icon="i-ri-menu-2-line" @click="toggleSidebar" />
      <VButton variant="solid">Login</VButton>
    </template>

    <template #sidebar> Lorem ipsum dolor sit amet consectetur adipisicing. </template>

    <template #default>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, quibusdam.
    </template>
  </VScaffold>
</template>
