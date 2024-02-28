import { atom } from "jotai";
import type { StagedFilter } from "../../stage/StagedFilters";

export const blurFilterAtom = atom(0);
export const brightnessFilterAtom = atom(1);
export const contrastFilterAtom = atom(1);
export const saturationFilterAtom = atom(1);
export const pixelateFilterAtom = atom(0);
export const redFilterAtom = atom(1);
export const greenFilterAtom = atom(1);
export const blueFilterAtom = atom(1);

// Derived
export const controlFilterAtom = atom(
  (get) => {
    const blur = get(blurFilterAtom);
    const brightness = get(brightnessFilterAtom);
    const contrast = get(contrastFilterAtom);
    const saturation = get(saturationFilterAtom);
    const pixelate = get(pixelateFilterAtom);
    const red = get(redFilterAtom);
    const green = get(greenFilterAtom);
    const blue = get(blueFilterAtom);

    return {
      blur,
      brightness,
      contrast,
      saturation,
      pixelate,
      red,
      green,
      blue,
    };
  },
  (_get, set, update: Partial<StagedFilter>) => {
    if (update.blur !== undefined) {
      set(blurFilterAtom, update.blur);
    }
    if (update.brightness !== undefined) {
      set(brightnessFilterAtom, update.brightness);
    }
    if (update.contrast !== undefined) {
      set(contrastFilterAtom, update.contrast);
    }
    if (update.saturation !== undefined) {
      set(saturationFilterAtom, update.saturation);
    }
    if (update.pixelate !== undefined) {
      set(pixelateFilterAtom, update.pixelate);
    }
    if (update.red !== undefined) {
      set(redFilterAtom, update.red);
    }
    if (update.green !== undefined) {
      set(greenFilterAtom, update.green);
    }
    if (update.blue !== undefined) {
      set(blueFilterAtom, update.blue);
    }
  }
);
