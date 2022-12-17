<script lang="ts" setup>
const props = defineProps({
  error: { type: String, default: "" },
});
</script>

<template>
  <div v-if="error" class="bg-red-500 text-white p-2 rounded-md my-2 flex">
    <p class="flex-1">{{ props.error }}</p>
  </div>
</template>
