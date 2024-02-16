import { atom } from "jotai";

export const lockAtom = atom(false);
export const lockControlAtom = atom(null, (_get, set) => {
  set(lockAtom, (prev) => !prev);
});
