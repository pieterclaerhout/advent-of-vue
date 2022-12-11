<script lang="ts" setup>
defineProps({
  isSetup: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <p
    :class="isSetup ? 'self-start bg-teal-800' : 'self-end bg-red-800'"
    class="w-56 px-4 py-2 text-white rounded-md shadow-md"
  >
    <slot />
  </p>
</template>
