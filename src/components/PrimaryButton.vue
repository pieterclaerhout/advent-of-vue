<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<template>
  <button class="btn-primary" @click="(event:Event) => emit('click', event)">
    <slot />
  </button>
</template>
