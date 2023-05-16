<script setup lang="ts">
const props = defineProps({
  title: String,
  classes: Array<String> | null,
});
</script>

<template>
  <h1 class="title" :class="[classes ?? null]">{{ title }}</h1>
</template>

<style scoped></style>
