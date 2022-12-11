<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const answer = ref<string | null>(null);
const correct = computed<boolean>(() => {
  return answer.value === "Frost Bite";
});

function nextClue(): void {
  router.push({ name: "day10-whoami" });
}
</script>

<template>
  <PageTitle>But First You must Answer a Riddle</PageTitle>

  <div class="max-w-xl w-full">
    <p>What do you get when you cross a snowman and a Vampire?</p>

    <select v-model="answer" class="p-2 border-2 border-gray-dark w-full mt-4">
      <option value="A Dad Joke">A Dad Joke</option>
      <option value="Frost Bite">Frost Bite</option>
      <option value="I don't know">I don't know</option>
    </select>

    <div class="mt-4">
      <primary-button @click.prevent="nextClue" v-if="correct">
        Correct! Reveal Clue
      </primary-button>

      <p class="text-error" v-if="answer && !correct">Wrong! Try again</p>
    </div>
  </div>
</template>
