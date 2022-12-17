<script lang="ts" setup></script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>Custom Chistmas Directive</PageTitle>
    <p v-christmas>Red + Green (default)</p>
    <p v-christmas:red>Red only</p>
    <p v-christmas:green>Green only</p>
    <p v-christmas="5">Slower Animation</p>
  </main>
</template>
