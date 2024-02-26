import { atom } from "jotai";
import type { StagedFilter } from "../../stage/StagedFilters";

export const blurFilterAtom = atom(0);
export const brightnessFilterAtom = atom(1);
export const contrastFilterAtom = atom(1);
export const saturationFilterAtom = atom(1);

// Derived
export const controlFilterAtom = atom(
  (get) => {
    const blur = get(blurFilterAtom);
    const brightness = get(brightnessFilterAtom);
    const contrast = get(contrastFilterAtom);
    const saturation = get(saturationFilterAtom);

    return {
      blur,
      brightness,
      contrast,
      saturation,
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
  }
);
