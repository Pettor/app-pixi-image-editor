import { useAtomValue, useSetAtom } from "jotai";
import type { IApplicationOptions } from "pixi.js";
import { lockAtom, zoomAtom, zoomControlAtom } from "../viewport/ViewportAtoms";
import { stageOptionsAtom } from "./StageAtoms";

export function useStageViewport(): {
  stageOptions: Partial<IApplicationOptions>;
  lock: boolean;
  zoom: number;
  zoomIn: (value: number) => void;
} {
  const stageOptions = useAtomValue(stageOptionsAtom);
  const lock = useAtomValue(lockAtom);
  const zoom = useAtomValue(zoomAtom);
  const zoomControl = useSetAtom(zoomControlAtom);

  function zoomIn(value: number): void {
    zoomControl(value * 100);
  }

  return {
    stageOptions,
    lock,
    zoom,
    zoomIn,
  };
}
