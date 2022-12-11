<script lang="ts" setup>
import { ref } from "vue";
import PageTitle from "../../components/PageTitle.vue";
import InputField from "../../components/InputField.vue";

const to = ref<string>("");
const from = ref<string>("");
</script>

<template>
  <PageTitle>Christmas Card</PageTitle>
  <div>
    <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
      <div
        class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4"
      >
        <img src="/assets/santa.svg?url" alt="" class="max-w-[12em]" />
        <div>
          <h1 class="font-serif text-4xl">Happy Holidays!</h1>
          <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
          <div class="mt-2 bg-white text-black p-2 rounded">
            FROM: {{ from }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <label class="block"> To: <InputField v-model="to" autofocus /> </label>
      <label class="mt-2 block"> From: <InputField v-model="from" /> </label>
    </div>
  </div>
</template>
