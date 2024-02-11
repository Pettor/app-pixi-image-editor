import { useAtom } from "jotai";
import { zoomAtom } from "../viewport/ViewportAtoms";

export function useToolbarZoom(): {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
} {
  const [zoom, setZoom] = useAtom(zoomAtom);

  function zoomIn(): void {
    setZoom((prev) => prev + 10);
  }

  function zoomOut(): void {
    setZoom((prev) => prev - 10);
  }

  function resetZoom(): void {
    setZoom(100);
  }

  return {
    zoom,
    zoomIn,
    zoomOut,
    resetZoom,
  };
}
