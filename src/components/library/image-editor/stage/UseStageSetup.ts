import { useAtom, useSetAtom } from "jotai";
import { viewportAtom } from "../atoms/viewport/ViewportAtoms";
import { viewportSetupEffect } from "../atoms/viewport/ViewportSetupAtoms";
import type { ViewportExtended } from "../viewport/ViewportExtended";

export function useStageSetup(): {
  registerViewport: (viewport: ViewportExtended) => void;
} {
  useAtom(viewportSetupEffect);
  const setViewport = useSetAtom(viewportAtom);

  function registerViewport(viewport: ViewportExtended): void {
    setViewport(viewport);
  }

  return {
    registerViewport,
  };
}
