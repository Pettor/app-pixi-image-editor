import { atom } from "jotai";
import { ZOOM_BASE, ZOOM_MAX_DEFAULT, ZOOM_MIN_DEFAULT } from "../../constants/ZoomConstants";

export const zoomAtom = atom(ZOOM_BASE);
export const fitZoomAtom = atom(ZOOM_BASE);
export const minZoomAtom = atom(ZOOM_MIN_DEFAULT);
export const maxZoomAtom = atom(ZOOM_MAX_DEFAULT);

// Derived atoms
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
