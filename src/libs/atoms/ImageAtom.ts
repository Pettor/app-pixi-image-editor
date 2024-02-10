import { atom } from "jotai";

export const imageUrlAtom = atom<string>("");

export const imageAtom = atom<HTMLImageElement | null>(null);
