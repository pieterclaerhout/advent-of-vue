<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  modelValue: String,
  autofocus: Boolean,
});

const defaultField = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (props.autofocus) {
    defaultField.value?.focus();
  }
});
</script>

<template>
  <input
    ref="defaultField"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
  />
</template>
