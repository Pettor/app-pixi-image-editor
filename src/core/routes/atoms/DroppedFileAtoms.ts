import { atom } from "jotai";

export const droppedFileAtom = atom<File | null>(null);

// Getters
export const getDownloadUrlAtom = atom<string | null>((get) => {
  const file = get(droppedFileAtom);
  if (file === null) {
    return null;
  }
  return URL.createObjectURL(file);
});
