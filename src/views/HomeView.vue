<script lang="ts" setup>
import PageTitle from "../components/PageTitle.vue";
import HomeTile from "../components/HomeTile.vue";
import { navigationRoutes } from "../router";
</script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>About</PageTitle>
    <p>
      My solutions for the
      <ExternalLink href="https://adventofvue.com/">Advent of Vue</ExternalLink>
      challenge.
    </p>
    <p>
      I decided the settle on
      <ExternalLink href="https://www.typescript.com">TypeScript</ExternalLink>,
      <ExternalLink href="https://vuejs.org">Vue 3</ExternalLink> (using the
      composition API) and
      <ExternalLink href="https://tailwindcss.com">TailwindCSS</ExternalLink>.
    </p>
    <p>
      Source code can be found on
      <ExternalLink href="https://github.com/pieterclaerhout/advent-of-vue">
        GitHub
      </ExternalLink>
    </p>
    <PageTitle>The solutions</PageTitle>
    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4">
      <HomeTile
        v-for="route of navigationRoutes"
        :key="route"
        :routeName="route"
      >
        {{ route }}
      </HomeTile>
    </div>
  </main>
</template>
