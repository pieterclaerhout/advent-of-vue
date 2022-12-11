<script lang="ts" setup>
import type { Product } from "../clients/ProductClient";
import { ref, watch } from "vue";
import { useItemComparison } from "../composables/itemComparison";
const { isFetchingItems, availableItems, itemsToCompare } = useItemComparison();

const selectedItem = ref<Product>();

watch(selectedItem, (newItem, prevItem) => {
  if (!newItem) {
    return;
  }
  itemsToCompare.value = itemsToCompare.value.filter(
    (item) => item.id !== prevItem?.id
  );
  itemsToCompare.value.push(newItem);
});
</script>

<template>
  <p v-if="isFetchingItems">Please wait…</p>
  <select v-else v-model="selectedItem" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="item in availableItems" :key="item.id" :value="item">
      {{ item.title }} - ${{ item.price }}
    </option>
  </select>
</template>
