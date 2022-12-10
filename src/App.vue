<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import router from "./router";

router.getRoutes();
</script>

<template>
  <header class="bg-red-100">
    <h1>Advent of Vue</h1>

    <nav>
      <RouterLink
        v-for="route of router.getRoutes()"
        :key="route.name"
        :to="route"
      >
        {{ route.name }}
      </RouterLink>
    </nav>
  </header>
  <main>
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
