import { atom } from "jotai";

export const lockAtom = atom(false);
export const lockControlAtom = atom(null, (_get, set) => {
  set(lockAtom, (prev) => !prev);
});

export const zoomAtom = atom(100);
export const zoomControlAtom = atom(null, (_get, set, zoom: "increase" | "decrease" | "reset" | number) => {
  switch (zoom) {
    case "increase":
      set(zoomAtom, (prev) => prev + 10);
      break;
    case "decrease":
      set(zoomAtom, (prev) => prev - 10);
      break;
    case "reset":
      set(zoomAtom, 100);
      break;
    default:
      set(zoomAtom, Math.floor(zoom));
  }
});
