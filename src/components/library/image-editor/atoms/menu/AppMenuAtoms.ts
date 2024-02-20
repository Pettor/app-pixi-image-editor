import { atom } from "jotai";

export const appMenuStateAtom = atom(false);

// Derived atoms
export const toggleAppMenuState = atom(null, (_get, set) => set(appMenuStateAtom, (prev) => !prev));
