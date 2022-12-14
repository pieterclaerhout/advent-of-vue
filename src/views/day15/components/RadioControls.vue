<script lang="ts" setup>
import { computed } from "vue";
import IconBackward from "./icons/IconBackward.vue";
import IconForward from "./icons/IconForward.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconPause from "./icons/IconPause.vue";
import IconChevronRight from "./icons/IconChevronRight.vue";
import IconChevronLeft from "./icons/IconChevronLeft.vue";
import { useCurrentTrack } from "../composables/useCurrentTrack";
import { usePlaylist } from "../composables/usePlaylist";
const { play, pause, rewind, ff, playing, timeDisplay, volume, progress } =
  useCurrentTrack();

const { next, prev } = usePlaylist();

const volumneGradient = computed(() => {
  return `linear-gradient(90deg, rgba(66, 184, 131, 1) 0%, rgba(66, 184, 131, 1) ${
    volume.value * 100
  }%, transparent ${volume.value * 100}%)`;
});
</script>

<template>
  <div class="w-full relative rounded bg-gray-800 text-white">
    <div
      class="progress rounded h-1 bg-gray-400 relative"
      :style="`width: ${progress}%;`"
    ></div>
    <div class="flex sm:justify-center items-center">
      <button class="pl-5" title="Previous Song" @click="prev()">
        <IconChevronLeft />
      </button>

      <button title="Rewind" @click="rewind()">
        <IconBackward />
      </button>

      <button
        class="bg-emerald-500 rounded-full w-12 h-12 scale-150 mx-5"
        :title="playing ? 'Pause' : 'Play'"
        @click="playing ? pause() : play()"
      >
        <Transition>
          <IconPause
            v-if="playing"
            class="absolute top-[50%] left-[50%]"
            style="transform: translate(-50%, -50%)"
          />
          <IconPlay
            v-else
            class="absolute top-[50%] left-[50%]"
            style="transform: translate(-50%, -50%)"
          />
        </Transition>
      </button>

      <button title="Fast Forward" @click="ff()">
        <IconForward />
      </button>
      <button title="Next Song" @click="next()">
        <IconChevronRight />
      </button>
    </div>
    <input
      :value="volume * 100"
      class="absolute right-5 w-24 top-[50%]"
      style="transform: translateY(-50%)"
      type="range"
      @input="
        volume = parseFloat(($event.target as HTMLInputElement).value) / 100
      "
    />
    <div
      class="hidden sm:block absolute left-5 w-24 top-[50%] whitespace-nowrap"
      style="transform: translateY(-50%)"
    >
      {{ timeDisplay }}
    </div>
  </div>
</template>
<style scoped>
.progress {
  background: linear-gradient(
    90deg,
    rgba(66, 184, 131, 1) 0%,
    rgba(0, 48, 255, 1) 100%
  );
}
input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  border: rgba(66, 184, 131, 1) 1px solid;
  background: v-bind(volumneGradient);
  height: 4px;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
  transform: translate(-50%, -50%) scale(1) !important;
}

.v-enter-from,
.v-leave-to {
  transform: translate(-50%, -50%) scale(0.3) !important;
  opacity: 0;
}
div svg {
  transition: 0.3s ease all;
}
div svg:hover {
  opacity: 0.7;
}
</style>
