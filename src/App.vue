<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Advent of Vue</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
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
    }
  }
}
main {
  padding: 10px;
}
</style>
