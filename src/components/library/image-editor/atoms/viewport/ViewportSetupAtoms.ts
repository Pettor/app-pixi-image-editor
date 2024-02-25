import { atom } from "jotai";
import { atomEffect } from "jotai-effect";
import { fitScreenAtom } from "./FitScreenAtoms";

const viewportSetupHasRunAtom = atom(false);

// Effects
export const viewportSetupAtomEffect = atomEffect((get, set) => {
  if (get(viewportSetupHasRunAtom)) {
    return;
  }

  set(viewportSetupHasRunAtom, true);

  // Run setup for viewport
  set(fitScreenAtom);
});
