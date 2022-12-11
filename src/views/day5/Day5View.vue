<script lang="ts" setup>
import { ref } from "vue";

const to = ref<string>("");
const from = ref<string>("");
</script>

<template>
  <PageTitle>Christmas Card</PageTitle>
  <div class="w-full max-w-2xl p-4 rounded-md bg-red-400 text-white">
    <div
      class="border-2 rounded-md flex flex-col md:flex-row md:items-center md:gap-8 p-4"
    >
      <img src="/assets/santa.svg?url" alt="" class="max-w-[12em]" />
      <div>
        <h1 class="font-serif text-4xl">Happy Holidays!</h1>
        <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
        <div class="mt-2 bg-white text-black p-2 rounded">FROM: {{ from }}</div>
      </div>
    </div>
  </div>
  <div class="mt-6 max-w-xl w-full">
    <label class="block"> To: <InputField v-model="to" autofocus /> </label>
    <label class="mt-2 block"> From: <InputField v-model="from" /> </label>
  </div>
</template>
