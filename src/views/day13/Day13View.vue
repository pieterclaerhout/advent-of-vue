<script lang="ts" setup>
import ChristmasTreeWithOrnaments from "../../components/ChristmasTreeWithOrnaments.vue";
import ChristmasLights from "../../components/ChristmasLights.vue";
import ChristmasOrnament from "../../components/ChristmasOrnament.vue";
</script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>Chistmas Tree with lights and ornaments</PageTitle>

    <ChristmasTreeWithOrnaments :size="7">
      <template #lights>
        <ChristmasLights v-for="i in 2" :key="i" />
      </template>

      <template #ornaments>
        <ChristmasOrnament />
      </template>

      <template #even>
        <ChristmasOrnament color="green" />
      </template>
      <template #odd>
        <ChristmasOrnament color="red" />
      </template>
    </ChristmasTreeWithOrnaments>
  </main>
</template>
