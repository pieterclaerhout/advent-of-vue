<script lang="ts" setup>
import PageTitle from "../../components/PageTitle.vue";
import PrimaryButton from "../../components/PrimaryButton.vue";
import { computed, ref } from "vue";
import presents from "./presents.json";

interface PresentDimension {
  width: number;
  height: number;
}

interface Present {
  id: number;
  src: string;
  dimensions: PresentDimension;
}

const sortFunctions: { [key: string]: (a: Present, b: Present) => number } = {
  smallToBig: (a: Present, b: Present) =>
    a.dimensions.width * a.dimensions.height -
    b.dimensions.width * b.dimensions.height,
  default: (a: Present, b: Present) => a.id - b.id,
};

const sortFunctionActive = ref<string>("default");

const toggleSort = () => {
  sortFunctionActive.value =
    sortFunctionActive.value === "default" ? "smallToBig" : "default";
};

const presentsSorted = computed(() =>
  [...presents].sort(sortFunctions[sortFunctionActive.value])
);
</script>

<template>
  <PageTitle>Drag the presents under the tree!</PageTitle>
  <div class="max-w-md">
    <div>
      <img src="/assets/day9/tree.svg?url" alt="Christmas tree" />
    </div>
    <div class="mt-2 flex justify-center items-center">
      <img
        v-for="present in presentsSorted"
        :key="present.id"
        :src="present.src"
        :alt="`Present ${present.id}`"
        data-qa="present"
      />
    </div>
    <div class="mt-8">
      <primary-button @click="toggleSort"> Toggle sort </primary-button>
    </div>
  </div>
</template>
