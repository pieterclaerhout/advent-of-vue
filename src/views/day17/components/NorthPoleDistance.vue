<script lang="ts" setup>
import { getDistanceKm, getDistanceMiles } from "../utils/distance";
import { useGeolocation } from "@vueuse/core";
import { ref, computed } from "vue";

const { coords } = useGeolocation();

const unit = ref<"km" | "mile">("mile");

const distance = computed(() => {
  return unit.value === "km"
    ? getDistanceKm(coords.value.latitude, coords.value.longitude)
    : getDistanceMiles(coords.value.latitude, coords.value.longitude);
});

const toggleUnit = () => {
  if (unit.value === "km") {
    unit.value = "mile";
  } else {
    unit.value = "km";
  }
};
</script>

<template>
  <slot v-bind="{ unit, distance, toggleUnit }" />
</template>
