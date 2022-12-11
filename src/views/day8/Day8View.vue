<script lang="ts" setup>
import PageTitle from "../../components/PageTitle.vue";
import { computed, watch } from "vue";
import { useCycleList } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t, d, locale, availableLocales } = useI18n();

const list = useCycleList(availableLocales);

watch(list.state, (state) => (locale.value = state));

const christmasDate = new Date("2022/12/25");

const days = computed((): number => {
  const delta: number = christmasDate.getTime() - new Date().getTime();
  return Math.ceil(delta / (1000 * 60 * 60 * 24));
});
</script>

<template>
  <PageTitle>{{ t("happyHolidays") }}</PageTitle>
  <section class="flex flex-col items-center leading-loose text-center w-96">
    <i18n-t keypath="christmasIsComing" tag="span" scope="global">
      <template #time>
        <span class="font-medium text-green-600">
          {{ t("day", days) }}
        </span>
      </template>

      <template #date>
        {{ d(christmasDate, "long") }}
      </template>
    </i18n-t>

    <div class="flex items-center justify-between flex-col w-full">
      <div>{{ t("language") }}</div>
      <div class="w-full">
        <button
          class="bg-green w-full h-10 rounded-lg px-4"
          @click="list.next()"
        >
          next language
        </button>
      </div>
    </div>
  </section>
</template>
