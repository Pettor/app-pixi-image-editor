import { atom } from "jotai";

export const appMenuStateAtom = atom(false);
export const toggleAppMenuState = atom(null, (_get, set) => set(appMenuStateAtom, (prev) => !prev));
