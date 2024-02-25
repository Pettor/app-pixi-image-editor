import { atom } from "jotai";
import { getViewportAtom, getViewportDimensionsAtom } from "./ViewportAtoms";
import { fitZoomAtom, zoomControlAtom } from "./ZoomAtoms";

// Derived atoms
export const fitScreenAtom = atom(null, (get, set) => {
  const viewport = get(getViewportAtom);
  const { worldWidth, worldHeight } = get(getViewportDimensionsAtom);
  const defaultZoom = get(fitZoomAtom);

  viewport.fit(true);
  viewport.moveCenter(worldWidth / 2, worldHeight / 2);
  set(zoomControlAtom, defaultZoom);
});
