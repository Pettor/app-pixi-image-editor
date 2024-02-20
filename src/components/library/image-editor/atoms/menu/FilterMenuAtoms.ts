import { atom } from "jotai";

export const filterMenuStateAtom = atom(false);

// Derived atoms
export const toggleFilterMenuState = atom(null, (_get, set) => set(filterMenuStateAtom, (prev) => !prev));
