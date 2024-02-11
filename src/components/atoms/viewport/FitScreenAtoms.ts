import { atom } from "jotai";
import { viewportAtom } from "./ViewportAtoms";
import { zoomControlAtom } from "./ZoomAtoms";

export const fitScreenAtom = atom(null, (get, set) => {
  const viewport = get(viewportAtom);

  if (!viewport) {
    console.error("Viewport is not set");
    return;
  }

  const { screenWidth, screenHeight, worldWidth, worldHeight } = viewport;

  const wFactor = screenWidth / worldWidth;
  const hFactor = screenHeight / worldHeight;

  // The factor determines if the image is bigger or smaller than the screen
  const factor = wFactor > hFactor ? hFactor : wFactor;
  let minZoom = 100;

  if (factor < 1) {
    // If the image is smaller than the screen the minZoom level is an increase from the default level
    minZoom = factor * 100;
  }

  viewport.fit(true);
  viewport.moveCenter(worldWidth / 2, worldHeight / 2);
  set(zoomControlAtom, minZoom < 1 ? minZoom : factor * 100);
});
