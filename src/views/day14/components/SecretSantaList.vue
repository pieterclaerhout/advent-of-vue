<script lang="ts" setup>
import type { ListItem } from "../types/ListItem";

const props = defineProps({
  matches: { type: Array<ListItem>, default: [] },
});
</script>

<template>
  <div class="border-2 p-6 rounded-lg my-12 text-xl">
    <div
      v-for="{ receiver, giver } in props.matches"
      :key="receiver.email"
      class="mt-4"
    >
      <strong>{{ giver?.name }} 🎅🏻</strong> is the secret santa of
      <strong>{{ receiver?.name }} 🎁</strong>
    </div>
  </div>
</template>
