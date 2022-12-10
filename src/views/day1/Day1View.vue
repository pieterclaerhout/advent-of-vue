<script lang="ts" setup>
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { ProductClient } from "../../clients/ProductClient";
import type { Product } from "../../clients/ProductClient";
import PageTitle from "../../components/PageTitle.vue";

const searchTerm = ref<string>("");
const products = ref<Product[]>([]);
const loading = ref<boolean>(false);
const noResults = ref<boolean>(false);

const client: ProductClient = new ProductClient();

const findProducts = useDebounceFn(async (term) => {
  noResults.value = false;
  if (term.length) {
    try {
      loading.value = true;
      products.value = await client.search(term);
      noResults.value = !products.value.length;
      loading.value = false;
    } catch (error) {
      loading.value = false;
      alert("Whoops, something went wrong!");
      searchTerm.value = "";
    }
  } else {
    products.value = [];
  }
}, 300);

watch(searchTerm, (newTerm) => findProducts(newTerm));
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <PageTitle>Gift Search Bar</PageTitle>
    <input
      type="text"
      class="p-2 border-2 border-gray-dark"
      v-model="searchTerm"
      placeholder="Start typing..."
    />
    <p v-if="noResults">No results found.</p>
    <p v-if="loading">Loading...</p>
    <ul v-else class="list-disc">
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>

<style></style>
