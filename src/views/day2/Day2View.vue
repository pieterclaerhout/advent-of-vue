<script lang="ts" setup>
import { ref } from "vue";
import { JokeClient, type Joke } from "@/clients/JokeClient";
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
  <div class="max-w-xl w-full flex flex-col gap-4">
    <TextBubble v-if="!loading" is-setup>
      {{ setup }}
    </TextBubble>
    <TextBubble v-if="showDelivery && !loading">
      {{ delivery }}
    </TextBubble>
    <primary-button @click="handleClick">
      <span v-if="loading">Loading…</span>
      <span v-else-if="showDelivery">Another!</span>
      <span v-else>Tell Me!</span>
    </primary-button>
  </div>
</template>
