<script lang="ts" setup>
import NorthPoleDistance from "./components/NorthPoleDistance.vue";
</script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>Distance to the North Pole</PageTitle>

    <PageSubTitle>Example 1</PageSubTitle>
    <NorthPoleDistance v-slot="{ distance, toggleUnit, unit }">
      <p>
        You are currently: {{ distance }} {{ unit }}s away from the North Pole.
      </p>
      <primary-button class="mt-4" @click="toggleUnit">
        Toggle Unit
      </primary-button>
    </NorthPoleDistance>

    <PageSubTitle>Example 2</PageSubTitle>
    <NorthPoleDistance v-slot="{ distance, toggleUnit, unit }">
      <p>Current distance from the North Pole</p>
      <p class="text-2xl mt-4">{{ distance }} {{ unit }}s</p>
      <primary-button class="mt-4" @click="toggleUnit">
        Switch to {{ unit === "km" ? "miles" : "km" }}
      </primary-button>
    </NorthPoleDistance>
  </main>
</template>
