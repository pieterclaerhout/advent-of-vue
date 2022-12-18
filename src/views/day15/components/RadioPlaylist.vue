<script lang="ts" setup>
import type { Song } from "../types/Song";
import { usePlaylist } from "../composables/usePlaylist";
import { useCurrentTrack } from "../composables/useCurrentTrack";
import RadioSong from "./RadioSong.vue";

const { songs, state } = usePlaylist();
const { playing, play } = useCurrentTrack();

function isSelected(song: Song) {
  return song.slug === state.value.slug;
}
function isPlaying(song: Song) {
  return isSelected(song) && playing.value;
}
</script>

<template>
  <ul>
    <RadioSong
      v-for="song in songs"
      :key="song.slug"
      :song="song"
      :is-selected="isSelected(song)"
      :is-playing="isPlaying(song)"
      @click="play(song)"
    />
  </ul>
</template>
