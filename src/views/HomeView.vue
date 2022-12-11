<script setup lang="ts">
import ExternalLink from "@/components/ExternalLink.vue";
</script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>About this</PageTitle>
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
  </main>
</template>
