<script lang="ts" setup>
import PageTitle from "../../components/PageTitle.vue";
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
      <img src="/assets/day9/tree.svg" alt="Christmas tree" />
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
    <button
      class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center mx-auto mt-8"
      @click="toggleSort"
    >
      Toggle sort
    </button>
  </div>
</template>
