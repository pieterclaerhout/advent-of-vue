<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="bg-green w-full h-10 rounded-lg px-4"
    @click="(event:Event) => emit('click', event)"
  >
    <slot />
  </button>
</template>
