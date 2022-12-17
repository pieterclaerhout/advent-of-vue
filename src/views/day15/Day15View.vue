<script lang="ts" setup>
import RadioPlayList from "./components/RadioPlaylist.vue";
import RadioControls from "./components/RadioControls.vue";
import KeyboardShortcuts from "./components/KeyboardShortcuts.vue";
import { usePlaylist } from "./composables/usePlaylist";
import { useCurrentTrack } from "./composables/useCurrentTrack";
import { useKeyboardShortcuts } from "./composables/useKeyboardShortcuts";
import { watch } from "vue";

useKeyboardShortcuts();
const { next } = usePlaylist();
const { play, playing, currentTime, duration, currentTrack } =
  useCurrentTrack();

watch(currentTrack, () => play());
watch(currentTime, () => {
  if (currentTime.value === duration.value) {
    next();
  }
});
</script>

<template>
  <main class="max-w-xl w-full text-center">
    <PageTitle>Chistmas Radio</PageTitle>
    <div>
      <div
        class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]"
      >
        <KeyboardShortcuts />
        <RadioPlayList :playing="playing" />
        <RadioControls />
      </div>
    </div>
  </main>
</template>
