<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import router from "./router";

const routes = router.getRoutes();
</script>

<template>
  <header>
    <h1 class="text-4xl font-bold mb-4">Advent of Vue</h1>

    <nav>
      <template v-for="route of routes" :key="route.name">
        <RouterLink :to="route" v-if="!route.name?.toString().startsWith('_')">
          {{ route.name }}
        </RouterLink>
      </template>
    </nav>
  </header>
  <main class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
header {
  background-color: #efefef;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  h1 {
    text-align: center;
    margin: 0 0 10px 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    a {
      padding: 8px;

      &:hover {
        background-color: #eee;
      }

      &.router-link-active {
        background-color: #ddd;
      }
    }
  }
}
main {
  padding: 10px;
}
</style>
