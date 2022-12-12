<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number;
  }>(),
  {
    size: 1,
  }
);
</script>

<template>
  <div>
    <ChristmasTreeWithLights v-if="size > 1" :size="size - 1">
      <template #lights>
        <slot name="lights" />
      </template>
    </ChristmasTreeWithLights>

    <div class="flex flex-row justify-center">
      <div
        v-for="i in size"
        :key="`lights-${i}`"
        class="relative rounded-full bg-emerald-500 w-16 h-16 -m-2 flex justify-center items-center"
      >
        <slot name="lights" />
      </div>
    </div>
  </div>
</template>
