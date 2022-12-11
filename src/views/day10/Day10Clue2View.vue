<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UsaMap from "../../components/UsaMap.vue";

const router = useRouter();

const loadMessages: string[] = [
  "Elves making toys",
  "Buddy finding his Dad",
  "Rudolph shaking off jitters",
  "Santa delivering gifts",
  "Clue coming up!",
];

const progress = ref<number>(0);
const loaded = ref<boolean>(false);
const loadMessage = ref<number>(0);

const interval = setInterval(() => {
  progress.value++;
  if (progress.value % 20 === 0) {
    loadMessage.value++;
  }
  if (progress.value === 100) {
    loaded.value = true;
    clearInterval(interval);
  }
}, 60);

function nextClue(): void {
  router.push({ name: "_day10-clue3" });
}
</script>

<template>
  <PageTitle>Welcome to your Secret Santa Clues!</PageTitle>

  <div class="text-center max-w-xl w-full" v-if="!loaded">
    <progress
      class="progress w-full progress-primary"
      :value="progress"
      max="100"
    />
    <p>{{ loadMessages[loadMessage] }}</p>
  </div>

  <div v-else class="text-center">
    <UsaMap />
    <p>I've lived in 5 US states in my lifetime</p>

    <primary-button @click.prevent="nextClue" class="mt-4"
      >Reveal LAST Clue</primary-button
    >
  </div>
</template>
