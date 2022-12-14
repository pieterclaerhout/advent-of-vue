<script lang="ts" setup>
import { ref } from "vue";
import EliminationVisualiser from "../../components/EliminationVisualiser.vue";

const numGifts = ref(Math.floor(Math.random() * 29 + 2));
</script>

<template>
  <PageTitle>Find Joseph's Gift</PageTitle>
  <div class="flex justify-center items-center">
    <label for="numGifts">Pick a number from 2 to 30:</label>
    <input
      type="range"
      id="numGifts"
      class="ml-2 p-1 border-2 border-gray-dark"
      min="2"
      max="30"
      v-model.number="numGifts"
    />
  </div>
  <EliminationVisualiser :num-gifts="numGifts" />
</template>
