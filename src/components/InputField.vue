<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  modelValue: String,
  autofocus: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const defaultField = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (props.autofocus) {
    defaultField.value?.focus();
  }
});

const emitEvent = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    ref="defaultField"
    :value="modelValue"
    @input="emitEvent"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
  />
</template>
