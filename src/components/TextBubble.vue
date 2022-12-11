<script lang="ts" setup>
withDefaults(
  defineProps<{
    isSetup: boolean;
  }>(),
  {
    isSetup: false,
  }
);
</script>

<template>
  <p
    :class="isSetup ? 'self-start bg-teal-800' : 'self-end bg-red-800'"
    class="px-4 py-2 text-white rounded-md shadow-md"
  >
    <slot />
  </p>
</template>
