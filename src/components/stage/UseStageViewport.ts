import { useAtomValue, useAtom } from "jotai";
import type { IApplicationOptions } from "pixi.js";
import { lockAtom, zoomAtom } from "../viewport/ViewportAtoms";
import { stageOptionsAtom } from "./StageAtoms";

export function useStageViewport(): {
  stageOptions: Partial<IApplicationOptions>;
  lock: boolean;
  zoom: number;
  zoomIn: (value: number) => void;
} {
  const stageOptions = useAtomValue(stageOptionsAtom);
  const lock = useAtomValue(lockAtom);
  const [zoom, setZoom] = useAtom(zoomAtom);

  function zoomIn(value: number): void {
    setZoom(Math.floor(value * 100));
  }

  return {
    stageOptions,
    lock,
    zoom,
    zoomIn,
  };
}
