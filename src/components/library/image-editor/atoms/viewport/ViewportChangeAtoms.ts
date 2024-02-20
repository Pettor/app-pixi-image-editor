import { atomEffect } from "jotai-effect";
import { ZOOM_BASE } from "../../constants/ZoomConstants";
import { isRotatedAtom } from "../transform/RotationAtoms";
import { viewportAtom } from "./ViewportAtoms";
import { fitZoomAtom } from "./ZoomAtoms";

export const viewportChangeAtom = atomEffect((get, set) => {
  const viewport = get(viewportAtom);
  if (!viewport) {
    return;
  }

  const isRotated = get(isRotatedAtom);

  const { screenWidth, screenHeight, worldWidth, worldHeight } = viewport;
  const imageWidth = isRotated ? worldHeight : worldWidth;
  const imageHeight = isRotated ? worldWidth : worldHeight;

  const wFactor = screenWidth / imageWidth;
  const hFactor = screenHeight / imageHeight;

  const factor = wFactor > hFactor ? hFactor : wFactor;
  const defaultZoom = factor * ZOOM_BASE;

  set(fitZoomAtom, Math.floor(defaultZoom));
});
