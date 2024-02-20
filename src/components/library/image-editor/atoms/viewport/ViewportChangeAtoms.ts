import { atomEffect } from "jotai-effect";
import { ZOOM_BASE } from "../../constants/ZoomConstants";
import { isRotated } from "../transform/RotationAtoms";
import { viewportAtom } from "./ViewportAtoms";
import { fitZoomAtom } from "./ZoomAtoms";

export const viewportChangeAtom = atomEffect((get, set) => {
  const viewport = get(viewportAtom);
  if (!viewport) {
    return;
  }

  const rotated = get(isRotated);

  const { screenWidth, screenHeight, worldWidth, worldHeight } = viewport;
  const imageWidth = rotated ? worldHeight : worldWidth;
  const imageHeight = rotated ? worldWidth : worldHeight;

  const wFactor = screenWidth / imageWidth;
  const hFactor = screenHeight / imageHeight;

  const factor = wFactor > hFactor ? hFactor : wFactor;
  const defaultZoom = factor * ZOOM_BASE;

  set(fitZoomAtom, Math.floor(defaultZoom));
});
