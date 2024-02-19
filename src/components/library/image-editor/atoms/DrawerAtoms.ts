import { atom } from "jotai";

export const drawerOpenedAtom = atom(false);
export const toggleDrawerAtom = atom(null, (_get, set) => set(drawerOpenedAtom, (prev) => !prev));
