<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppModal from "../../components/AppModal.vue";

const router = useRouter();

const modalOpen = ref<boolean>(false);

function nextClue(): void {
  modalOpen.value = false;
  setTimeout(() => {
    router.push({ name: "day10-clue2" });
  }, 300);
}
</script>

<template>
  <PageTitle>Welcome to your Secret Santa Clues!</PageTitle>
  <div class="text-center max-w-xl w-full">
    <primary-button v-if="!modalOpen" @click="modalOpen = true">
      Show clue 1
    </primary-button>

    <AppModal :open="modalOpen">
      <template #title> Clue # 1 </template>
      <div class="text-center">
        <p>I like teaching and coding with Vue.js! 🎉</p>
        <p>
          I also like to style things with
          <ExternalLink href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </ExternalLink>
          and
          <ExternalLink href="https://daisyui.com/" target="_blank">
            Daisy UI
          </ExternalLink>
        </p>
      </div>

      <template #actions>
        <primary-button @click.prevent="nextClue">Next clue</primary-button>
      </template>
    </AppModal>
  </div>
</template>
