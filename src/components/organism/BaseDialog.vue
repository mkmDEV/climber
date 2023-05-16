<script lang="ts" setup>
const props = defineProps(['contentClass', 'titleClass'])
</script>

<template>
  <teleport to="body">
    <input id="modal" class="modal-toggle" type="checkbox" />
    <div class="modal modal-bottom sm:modal-middle">
      <div :class="contentClass" class="modal-box">
          <slot name="title"  />
        <slot />
        <div class="modal-action">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped></style>
