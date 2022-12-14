<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color: "green" | "red";
  }>(),
  {
    color: "red",
  }
);

const AMPLIFY: number = 20;
const offsetY: number = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2);
const offsetX: number = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2);

const bgColor = computed<string>(() =>
  props.color === "green" ? "bg-emerald-200" : "bg-red-500"
);
</script>

<template>
  <div
    class="absolute rounded-full w-6 h-6 z-10"
    :class="bgColor"
    :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
  ></div>
</template>
