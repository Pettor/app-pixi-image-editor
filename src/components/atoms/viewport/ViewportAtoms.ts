import { atom } from "jotai";
import type { ViewportExtended } from "~/components/viewport/ViewportExtended";

export const viewportAtom = atom<ViewportExtended | null>(null);
