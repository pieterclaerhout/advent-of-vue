<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { navigationRoutes } from "./router";
</script>

<template>
  <header
    class="text-center bg-green-300 border-b-1 border-gray-300 py-4 shadow-md"
  >
    <RouterLink :to="{ name: 'home' }">
      <h1 class="text-2xl font-bold mb-4 text-black">Advent of Vue</h1>
    </RouterLink>

    <nav class="flex flex-row gap-2 justify-center flex-wrap">
      <template v-for="route of navigationRoutes" :key="route">
        <RouterLink
          :to="{ name: route }"
          class="p-2 hover:bg-green-200 hover:text-black rounded-md text-black"
        >
          {{ route }}
        </RouterLink>
      </template>
    </nav>
  </header>
  <main
    class="w-full h-full flex flex-col gap-5 justify-center items-center p-4"
  >
    <RouterView />
  </main>
</template>
