<script lang="ts" setup>
import ChristmasTreeWithLights from "../../components/ChristmasTreeWithLights.vue";
import ChristmasLights from "../../components/ChristmasLights.vue";
</script>

<template>
  <PageTitle>Christmas tree with lights</PageTitle>
  <ChristmasTreeWithLights :size="7">
    <template #lights>
      <ChristmasLights v-for="i in 2" :key="`tree-lights-${i}`" />
    </template>
  </ChristmasTreeWithLights>
</template>
