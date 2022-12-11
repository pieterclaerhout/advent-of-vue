<script lang="ts" setup>
import type { Product } from "@/clients/ProductClient";
import { computed } from "vue";
import { useItemComparison } from "../composables/itemComparison";

const { itemsToCompare } = useItemComparison();

const itemsSortedByPriceDesc = computed((): Product[] =>
  [...itemsToCompare.value].sort((a, b) => b.price - a.price)
);

const expensiveItem = computed((): Product => itemsSortedByPriceDesc.value[0]);
const cheapItem = computed((): Product => itemsSortedByPriceDesc.value[1]);

const itemsAreTheSame = computed(
  (): boolean => expensiveItem.value.id === cheapItem.value.id
);
const numCheaperItems = computed((): number =>
  Math.floor(expensiveItem.value.price / cheapItem.value.price)
);
</script>

<template>
  <p v-if="itemsAreTheSame" class="mx-5 text-center">
    These are the same items
  </p>
  <p v-else class="mx-5 text-center">
    You can get <strong>{{ numCheaperItems }}x </strong>
    <em>{{ cheapItem.title }}</em> for about the same price as a single
    <em>{{ expensiveItem.title }}</em>
  </p>
</template>
