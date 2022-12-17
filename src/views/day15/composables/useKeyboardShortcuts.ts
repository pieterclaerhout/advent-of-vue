import { useCurrentTrack } from "./useCurrentTrack";
import { usePlaylist } from "./usePlaylist";
import { onKeyStroke } from "@vueuse/core";
import type { ShortCutDescription } from "../types/ShortCutDefinition";
const {
  play,
  pause,
  rewind,
  ff,
  playing,
  currentTime,
  duration,
  volume,
  progress,
} = useCurrentTrack();
const { next, prev } = usePlaylist();

const shortcuts: ShortCutDescription[] = [
  // spacebar to play
  {
    shortcut: " ",
    handler: (e: KeyboardEvent) => {
      // Allow spacebar to trigger buttons as normal for accessibility
      const activeEl = document.activeElement;
      if (activeEl?.tagName.toUpperCase() === "BUTTON") return;
      e.preventDefault();

      // if not focusing a button play | pause the song
      playing.value ? pause() : play();
    },

    // handling prevent manually above
    options: { preventDefault: false },
  },

  // Right arrow for ff
  { shortcut: "ArrowRight", handler: () => ff() },

  // Cmd + RightArrow for Next
  {
    shortcut: "ArrowRight",
    handler: () => next(),
    options: { shift: true },
  },

  // Left arrow for ff
  { shortcut: "ArrowLeft", handler: () => rewind() },

  // Cmd + LeftArrow for prev
  {
    shortcut: "ArrowLeft",
    handler: () => prev(),
    options: { shift: true },
  },

  // Down Arrow for Volume Up
  {
    shortcut: "ArrowDown",
    handler: () => {
      const vol = volume.value - 0.1;
      volume.value = vol < 0 ? 0 : vol;
    },
  },

  // Up Arrow for Volume Down
  {
    shortcut: "ArrowUp",
    handler: () => {
      const vol = volume.value + 0.1;
      volume.value = vol > 1 ? 1 : vol;
    },
  },
];

export function useKeyboardShortcuts() {
  shortcuts.forEach((shortcut) => {
    onKeyStroke(shortcut.shortcut, (e: KeyboardEvent) => {
      if (shortcut.options?.preventDefault) {
        e.preventDefault();
      }
      if (shortcut.options?.shift && !e.shiftKey) {
        return;
      }
      shortcut.handler(e);
    });
  });
}
