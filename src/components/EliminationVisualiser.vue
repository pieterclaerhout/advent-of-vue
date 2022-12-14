<script lang="ts" setup>
import { toRefs, ref, computed, watch } from "vue";

const props = defineProps({ numGifts: Number });
const { numGifts } = toRefs(props);
const currentStep = ref<number>(1);

const eliminationOrder = computed<number[]>(() => {
  const gifts = [...Array(numGifts?.value ?? 0 + 1).keys()].slice(1);
  let indexToEliminate = 0;
  let moveBy = 1;
  const result = [];
  while (gifts.length > 1) {
    indexToEliminate = (indexToEliminate + moveBy) % gifts.length;
    result.push(gifts[indexToEliminate]);
    gifts.splice(indexToEliminate, 1);
  }
  return result;
});

const numSteps = computed<number>(() => eliminationOrder.value.length);

const eliminatedAfterCurrentStep = computed<number[]>(() =>
  eliminationOrder.value.slice(0, currentStep.value)
);

watch(numGifts, () => (currentStep.value = 1));
</script>

<template>
  <div class="text-center flex flex-col gap-4 items-center">
    <div class="text-2xl flex gap-2">
      <button
        class="disabled:opacity-40"
        :disabled="currentStep === 1"
        @click="currentStep = 1"
      >
        ⏮️
      </button>
      <button
        class="disabled:opacity-40"
        :disabled="currentStep === 1"
        @click="currentStep--"
      >
        ◀️
      </button>
      <button
        class="disabled:opacity-40"
        :disabled="currentStep === numSteps"
        @click="currentStep++"
      >
        ▶️
      </button>
      <button
        class="disabled:opacity-40"
        :disabled="currentStep === numSteps"
        @click="currentStep = numSteps"
      >
        ⏭️
      </button>
    </div>
    <div class="grid grid-cols-5 auto-rows-auto gap-5">
      <div
        v-for="n in numGifts"
        :key="n"
        class="w-10 h-10 leading-5 p-2 border-2 border-gray-dark"
        :class="{ 'opacity-40': eliminatedAfterCurrentStep.includes(n) }"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>
