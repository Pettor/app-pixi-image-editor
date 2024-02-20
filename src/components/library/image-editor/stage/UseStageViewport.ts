import { useAtomValue, useSetAtom } from "jotai";
import type { IApplicationOptions, IPointData } from "pixi.js";
import { stageOptionsAtom } from "../atoms/StageOptionsAtoms";
import { rotationAtom } from "../atoms/transform/RotationAtoms";
import { scaleAtom } from "../atoms/transform/ScaleAtoms";
import { lockAtom } from "../atoms/viewport/LockAtoms";
import { maxZoomAtom, minZoomAtom, zoomAtom, zoomControlAtom } from "../atoms/viewport/ZoomAtoms";

export function useStageViewport(): {
  stageOptions: Partial<IApplicationOptions>;
  lock: boolean;
  scale: IPointData;
  rotation: number;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  setZoom: (value: number) => void;
} {
  const stageOptions = useAtomValue(stageOptionsAtom);
  const lock = useAtomValue(lockAtom);
  const scale = useAtomValue(scaleAtom);
  const zoom = useAtomValue(zoomAtom);
  const minZoom = useAtomValue(minZoomAtom);
  const maxZoom = useAtomValue(maxZoomAtom);
  const zoomControl = useSetAtom(zoomControlAtom);
  const rotation = useAtomValue(rotationAtom);

  function setZoom(value: number): void {
    zoomControl(value * 100);
  }

  return {
    stageOptions,
    lock,
    scale,
    rotation,
    zoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    setZoom,
  };
}
