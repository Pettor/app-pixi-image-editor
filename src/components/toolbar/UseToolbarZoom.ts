import { useAtom, useSetAtom } from "jotai";
import { zoomAtom, zoomControlAtom } from "../viewport/ViewportAtoms";

export function useToolbarZoom(): {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
} {
  const [zoom] = useAtom(zoomAtom);
  const zoomControl = useSetAtom(zoomControlAtom);

  function zoomIn(): void {
    zoomControl("increase");
  }

  function zoomOut(): void {
    zoomControl("decrease");
  }

  function resetZoom(): void {
    zoomControl("reset");
  }

  return {
    zoom,
    zoomIn,
    zoomOut,
    resetZoom,
  };
}
