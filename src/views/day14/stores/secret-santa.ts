import { ref } from "vue";
import { defineStore } from "pinia";
import type { Person } from "../types/Person";

const filterForEmail = (email: string) => {
  return (item: Person) => item.email !== email;
};

export const useList = defineStore("hohoho", () => {
  const list = ref<Person[]>([]);

  const init = (initData: Person[]) => (list.value = initData);
  const add = (item: Person) => list.value.push(item);
  const remove = (email: any) => {
    list.value = list.value.filter(filterForEmail(email));
  };

  return { list, init, add, remove };
});
