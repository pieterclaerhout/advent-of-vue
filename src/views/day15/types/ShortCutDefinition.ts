import type { ShortCutOptions } from "./ShortCutOptions";

export type ShortCutDescription = {
  shortcut: string;
  handler: (e: KeyboardEvent) => void;
  options?: ShortCutOptions;
};
