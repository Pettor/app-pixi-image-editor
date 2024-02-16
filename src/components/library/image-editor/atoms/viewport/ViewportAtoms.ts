import { atom } from "jotai";
import type { ViewportExtended } from "../../viewport/ViewportExtended";

export const viewportAtom = atom<ViewportExtended | null>(null);
