<script lang="ts" setup>
import { onMounted } from "vue";
import ItemSelect from "../../components/ItemSelect.vue";
import ComparisonSummary from "../../components/ComparisonSummary.vue";
import { useItemComparison } from "../../composables/itemComparison";
import { ProductClient } from "../../clients/ProductClient";

const { isFetchingItems, availableItems, itemsToCompare } = useItemComparison();

const client = new ProductClient();

onMounted(async () => {
  try {
    availableItems.value = await client.all();
  } catch (error) {
    alert("Something went wrong!");
  } finally {
    isFetchingItems.value = false;
  }
});
</script>

<template>
  <PageTitle>Select Items to Compare</PageTitle>
  <div class="max-w-xl w-full flex flex-col gap-5 justify-center">
    <ItemSelect />
    <ItemSelect />
  </div>
  <ComparisonSummary v-if="itemsToCompare.length === 2" />
</template>
