import { atom } from "jotai";

export const lockAtom = atom(false);

// Derived atoms
export const lockControlAtom = atom(null, (_get, set) => {
  set(lockAtom, (prev) => !prev);
});
