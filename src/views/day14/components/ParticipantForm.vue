<script lang="ts" setup>
import Alert from "./Alert.vue";
import type { Person } from "../types/Person";
import { ref } from "vue";
import { useList } from "../stores/secret-santa";

const store = useList();
const nameField = ref<HTMLInputElement | null>(null);
const error = ref("");
const name = ref("");
const email = ref("");

const addPerson = () => {
  const person: Person | undefined = store.list.find((person) => {
    return person.name === name.value || person.email === email.value;
  });

  if (person) {
    return (error.value = `This name and/or email already exists in the list (${person.name}, ${person.email})`);
  }

  if (!name.value || !email.value) {
    return (error.value = "Please enter a name and email address");
  }

  store.add({ name: name.value, email: email.value });

  name.value = "";
  email.value = "";
  error.value = "";

  nameField.value?.focus();
};
</script>

<template>
  <form class="flex w-full" @submit.prevent="addPerson">
    <input
      ref="nameField"
      v-model="name"
      type="text"
      class="border-2 border-gray-500 rounded-md flex-1 p-2 mr-2"
      placeholder="Name"
    />
    <input
      v-model="email"
      type="text"
      class="border-2 border-gray-500 rounded-md flex-1 p-2 mr-2"
      placeholder="Email"
    />
    <button class="bg-emerald-500 text-white font-bold rounded-md px-2">
      Add to list 🎅🏻
    </button>
  </form>
  <Alert :error="error" />
</template>
