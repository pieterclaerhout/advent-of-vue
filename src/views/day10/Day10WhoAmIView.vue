<script lang="ts" setup>
import { ref, computed } from "vue";

const iAmGuess = ref<string>("");
const iAmCorrect = computed<boolean>(() => {
  const guess = iAmGuess.value.trim().toLowerCase();
  return guess === "daniel" || guess === "daniel kelly";
});
</script>

<template>
  <PageTitle>I'm the lead instructor at Vue School.</PageTitle>

  <div class="w-96">
    <p class="text-center">I'm the lead instructor at Vue School.</p>
    <InputField
      v-model="iAmGuess"
      type="text"
      placeholder="Who am I? (Hint: Daniel)"
      class="mt-4"
    />
    <transition>
      <div v-if="iAmCorrect" class="text-center">
        <p class="text-primary mt-4">You got it! It's nice to meet you! 👋</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
