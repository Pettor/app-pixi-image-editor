import { atom } from "jotai";
import { atomEffect } from "jotai-effect";
import { fitScreenAtom } from "./FitScreenAtoms";
import { viewportAtom } from "./ViewportAtoms";

const viewportSetupHasRunAtom = atom(false);
export const viewportSetupEffect = atomEffect((get, set) => {
  if (get(viewportSetupHasRunAtom)) {
    return;
  }

  const viewport = get(viewportAtom);
  if (!viewport) {
    return;
  }
  set(viewportSetupHasRunAtom, true);

  // Run setup for viewport
  set(fitScreenAtom);
});
