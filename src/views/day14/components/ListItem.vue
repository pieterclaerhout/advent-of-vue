<script lang="ts" setup>
import { useList } from "../stores/secret-santa";

const store = useList();

const props = defineProps({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
</script>

<template>
  <div class="border-2 border-emerald-500 rounded-md my-2 p-2 flex">
    <div class="flex-1">
      <h2 class="text-lg font-bold">{{ props.name }}</h2>
      <p class="text-gray-500">{{ props.email }}</p>
    </div>
    <button @click="store.remove(props.email)">🗑</button>
  </div>
</template>
