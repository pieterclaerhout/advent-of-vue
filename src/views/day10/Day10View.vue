<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PageTitle from "../../components/PageTitle.vue";
import AppModal from "../../components/AppModal.vue";
import PrimaryButton from "../../components/PrimaryButton.vue";

const router = useRouter();

const modalOpen = ref<boolean>(false);

function nextClue(): void {
  modalOpen.value = false;
  setTimeout(() => {
    router.push({ name: "_day10-clue2" });
  }, 300);
}
</script>

<template>
  <PageTitle>Welcome to your Secret Santa Clues!</PageTitle>
  <div class="text-center w-96">
    <primary-button @click="modalOpen = true" v-if="!modalOpen">
      Show clue 1
    </primary-button>

    <AppModal :open="modalOpen">
      <template #title> Clue # 1 </template>
      <div class="text-left">
        <p>I like teaching and coding with Vue.js! 🎉</p>
        <p>
          I also like to style things with
          <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
          and
          <a href="https://daisyui.com/" target="_blank">Daisy UI</a> (used in
          creating this site)
        </p>
      </div>

      <template #actions>
        <primary-button @click.prevent="nextClue">Next clue</primary-button>
      </template>
    </AppModal>
  </div>
</template>
