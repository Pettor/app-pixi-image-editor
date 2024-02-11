import { useAtomValue, useSetAtom } from "jotai";
import { rotationControlAtom } from "../atoms/transform/RotationAtoms";
import { scaleControlAtom } from "../atoms/transform/ScaleAtoms";
import { fitScreenAtom } from "../atoms/viewport/FitScreenAtoms";
import { lockAtom, lockControlAtom } from "../atoms/viewport/LockAtoms";

export function useToolbarTools(): {
  fitScreen: () => void;
  lock: boolean;
  swapLock: () => void;
  rotate: (value: Parameters<typeof rotationControl>[0]) => void;
  flip: (value: Parameters<typeof scaleControl>[0]) => void;
} {
  const fitScreen = useSetAtom(fitScreenAtom);
  const lock = useAtomValue(lockAtom);
  const lockControl = useSetAtom(lockControlAtom);
  const scaleControl = useSetAtom(scaleControlAtom);
  const rotationControl = useSetAtom(rotationControlAtom);

  function swapLock(): void {
    lockControl();
  }

  function rotate(val: Parameters<typeof rotationControl>[0]): void {
    rotationControl(val);
  }

  function flip(val: Parameters<typeof scaleControl>[0]): void {
    scaleControl(val);
  }

  return {
    fitScreen,
    lock,
    swapLock,
    rotate,
    flip,
  };
}
