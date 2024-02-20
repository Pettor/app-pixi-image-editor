import { atom } from "jotai";
import { viewportAtom } from "./ViewportAtoms";
import { fitZoomAtom, zoomControlAtom } from "./ZoomAtoms";

// Derived atoms
export const fitScreenAtom = atom(null, (get, set) => {
  const viewport = get(viewportAtom);

  if (!viewport) {
    console.error("Viewport is not set");
    return;
  }

  const { worldWidth, worldHeight } = viewport;
  const defaultZoom = get(fitZoomAtom);

  viewport.fit(true);
  viewport.moveCenter(worldWidth / 2, worldHeight / 2);
  set(zoomControlAtom, defaultZoom);
});
