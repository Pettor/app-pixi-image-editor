import { atom } from "jotai";
import type { ViewportExtended } from "../../viewport/ViewportExtended";
import { throwExpression } from "~/libs/typescript/ThrowExpression";

export const viewportAtom = atom<ViewportExtended | null>(null);

// Getters
export const getViewportAtom = atom((get) => get(viewportAtom) ?? throwExpression("Viewport not found"));

export const getViewportDimensionsAtom = atom((get) => {
  const viewport = get(getViewportAtom);
  const { worldWidth, worldHeight, screenWidth, screenHeight } = viewport;
  return {
    worldWidth,
    worldHeight,
    screenWidth,
    screenHeight,
  };
});
