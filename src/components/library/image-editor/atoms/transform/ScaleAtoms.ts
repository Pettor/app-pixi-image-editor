import { atom } from "jotai";
import type { IPointData } from "pixi.js";

export const scaleAtom = atom<IPointData>({ x: 1, y: 1 });
export const scaleControlAtom = atom(
  null,
  (_get, set, scale: "flip-horizontal" | "flip-vertical" | "reset" | IPointData) => {
    switch (scale) {
      case "flip-horizontal":
        set(scaleAtom, (prev) => {
          return { x: -prev.x, y: prev.y };
        });
        break;
      case "flip-vertical":
        set(scaleAtom, (prev) => {
          return { x: prev.x, y: -prev.y };
        });
        break;
      case "reset":
        set(scaleAtom, {
          x: 1,
          y: 1,
        });
        break;
      default:
        set(scaleAtom, scale);
    }
  }
);
