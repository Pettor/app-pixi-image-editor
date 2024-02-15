import { atom } from "jotai";
import type { ViewportExtended } from "~/components/image-editor/viewport/ViewportExtended";

export const viewportAtom = atom<ViewportExtended | null>(null);
