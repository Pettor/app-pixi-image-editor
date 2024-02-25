import { atom } from "jotai";

export const rotationAtom = atom(0);

// Getters
export const isRotatedAtom = atom((get) => {
  const rotation = get(rotationAtom);
  return (rotation / (Math.PI / 2)) % 2 !== 0;
});

// Derived atoms
export const rotationControlAtom = atom(
  null,
  (_get, set, rotation: "rotate-left" | "rotate-right" | "reset" | number) => {
    switch (rotation) {
      case "rotate-left":
        set(rotationAtom, (prev) => prev - Math.PI / 2);
        break;
      case "rotate-right":
        set(rotationAtom, (prev) => prev + Math.PI / 2);
        break;
      case "reset":
        set(rotationAtom, 0);
        break;
      default:
        set(rotationAtom, rotation);
    }
  }
);
