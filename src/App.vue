<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { routes } from "./router";

const navigationRoutes: (string | undefined)[] = routes
  .map((route) => route.children?.find((child) => child.path === ""))
  .filter((route) => route !== undefined && route.name !== undefined)
  .map((route) => route?.name?.toString());
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
