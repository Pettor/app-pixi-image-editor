import { atom } from "jotai";
import type { IApplicationOptions } from "pixi.js";

export const stageOptionsAtom = atom<Partial<IApplicationOptions>>({
  background: 0xffffff,
  backgroundAlpha: 0,
});
