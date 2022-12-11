<script lang="ts" setup>
import { JokeClient } from "@/clients/JokeClient";
import type { Joke } from "@/clients/JokeClient";
import { ref } from "vue";
import PageTitle from "../../components/PageTitle.vue";
import TextBubble from "../../components/TextBubble.vue";

const loading = ref<boolean>(false);
const setup = ref<string>("");
const delivery = ref<string>("");
const showDelivery = ref<boolean>(false);

const client: JokeClient = new JokeClient();

const fetchJoke = async () => {
  try {
    loading.value = true;
    const joke: Joke = await client.get();
    setup.value = joke.setup;
    delivery.value = joke.delivery;
    loading.value = false;
  } catch (error) {
    alert("Whoops, something went wrong!");
    loading.value = false;
  }
};

const handleClick = async () => {
  if (showDelivery.value) {
    await fetchJoke();
    showDelivery.value = false;
  } else {
    showDelivery.value = true;
  }
};
fetchJoke();
</script>

<template>
  <PageTitle>Gift Search Bar</PageTitle>
  <div class="w-72 flex flex-col gap-4">
    <TextBubble isSetup v-if="!loading">
      {{ setup }}
    </TextBubble>
    <TextBubble v-if="showDelivery && !loading">
      {{ delivery }}
    </TextBubble>
    <button class="bg-green w-full h-10 rounded-lg" @click="handleClick">
      <span v-if="loading">Loading…</span>
      <span v-else-if="showDelivery">Another!</span>
      <span v-else>Tell Me!</span>
    </button>
  </div>
</template>
