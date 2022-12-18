<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps<{
  modelValue: string;
  autofocus: boolean;
}>();

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
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
    @input="emitEvent"
  />
</template>
