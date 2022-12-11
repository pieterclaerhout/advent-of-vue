<script lang="ts" setup>
import { computed } from "vue";
import CountdownSegment from "../../components/CountdownSegment.vue";
import { useNow } from "@vueuse/core";

const now = useNow();
const christmas = new Date("12/25/2022 00:00:00");
const deltaInSecs = computed(() => {
  return Math.round((christmas.getTime() - now.value.getTime()) / 1000);
});

const daysLeft = computed(() => Math.floor(deltaInSecs.value / (60 * 60 * 24)));
const hoursLeft = computed(() =>
  Math.floor((deltaInSecs.value % (60 * 60 * 24)) / (60 * 60))
);
const minutesLeft = computed(() =>
  Math.floor((deltaInSecs.value % (60 * 60)) / 60)
);
const secondsLeft = computed(() => Math.floor(deltaInSecs.value % 60));
</script>

<template>
  <PageTitle>Christmas Countdown</PageTitle>
  <div class="flex justify-center">
    <CountdownSegment label="days" :number="daysLeft" />
    <CountdownSegment label="hours" :number="hoursLeft" />
    <CountdownSegment label="minutes" :number="minutesLeft" />
    <CountdownSegment label="seconds" :number="secondsLeft" />
  </div>
</template>
