<script setup lang="ts">
import { RouterLink, RouterView, type RouteRecordNormalized } from "vue-router";
import router from "./router";

const routes = router.getRoutes();

const isCurrentRoute = (route: RouteRecordNormalized): boolean => {
  return route.name === router.currentRoute.value.name;
};
</script>

<template>
  <header
    class="text-center bg-green-300 border-b-1 border-gray-300 py-4 shadow-md"
  >
    <RouterLink :to="{ name: '_home' }">
      <h1 class="text-2xl font-bold mb-4">Advent of Vue</h1>
    </RouterLink>

    <nav class="flex flex-row gap-2 justify-center">
      <template v-for="route of routes" :key="route.name">
        <RouterLink
          :to="route"
          v-if="!route.name?.toString().startsWith('_')"
          class="p-2 hover:bg-green-200 hover:text-black"
          :class="{
            'bg-green-700': isCurrentRoute(route),
            'text-white': isCurrentRoute(route),
          }"
        >
          {{ route.name }}
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
