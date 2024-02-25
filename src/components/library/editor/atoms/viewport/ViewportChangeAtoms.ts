import { atomEffect } from "jotai-effect";
import { ZOOM_BASE } from "../../constants/ZoomConstants";
import { isRotatedAtom } from "../transform/RotationAtoms";
import { getViewportDimensionsAtom } from "./ViewportAtoms";
import { fitZoomAtom } from "./ZoomAtoms";

// Effects
export const viewportChangeAtomEffect = atomEffect((get, set) => {
  const { screenWidth, screenHeight, worldWidth, worldHeight } = get(getViewportDimensionsAtom);
  const isRotated = get(isRotatedAtom);

  const imageWidth = isRotated ? worldHeight : worldWidth;
  const imageHeight = isRotated ? worldWidth : worldHeight;

  const wFactor = screenWidth / imageWidth;
  const hFactor = screenHeight / imageHeight;

  const factor = wFactor > hFactor ? hFactor : wFactor;
  const defaultZoom = factor * ZOOM_BASE;

  set(fitZoomAtom, Math.floor(defaultZoom));
});
