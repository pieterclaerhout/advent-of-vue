import type { Product } from "../clients/ProductClient";
import { ref } from "vue";

const availableItems = ref<Product[]>([]);
const isFetchingItems = ref<boolean>(true);
const itemsToCompare = ref<Product[]>([]);

export const useItemComparison = () => ({
  availableItems,
  isFetchingItems,
  itemsToCompare,
});
