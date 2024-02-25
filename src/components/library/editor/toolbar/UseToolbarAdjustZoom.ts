import { useAtomValue, useSetAtom } from "jotai";
import { fitScreenAtom } from "../atoms/viewport/FitScreenAtoms";
import { fitZoomAtom, zoomAtom, zoomControlAtom } from "../atoms/viewport/ZoomAtoms";

export function useToolbarAdjustZoom(): {
  adjustZoom: () => void;
  showFitScreen: boolean;
} {
  const setZoom = useSetAtom(zoomControlAtom);
  const currentZoom = useAtomValue(zoomAtom);
  const defaultZoom = useAtomValue(fitZoomAtom);
  const fitScreen = useSetAtom(fitScreenAtom);
  const isDefaultZoom = currentZoom === defaultZoom;

  function adjustZoom(): void {
    const isFit = currentZoom === defaultZoom;
    if (isFit) {
      setZoom("reset");
      return;
    }
    fitScreen();
  }

  return {
    adjustZoom,
    showFitScreen: isDefaultZoom,
  };
}
