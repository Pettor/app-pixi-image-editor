import { useAtomValue, useSetAtom } from "jotai";
import { toggleFilterMenuState } from "../atoms/tools/FilterMenuAtoms";
import { rotationControlAtom } from "../atoms/transform/RotationAtoms";
import { scaleControlAtom } from "../atoms/transform/ScaleAtoms";
import { fitScreenAtom } from "../atoms/viewport/FitScreenAtoms";
import { lockAtom, lockControlAtom } from "../atoms/viewport/LockAtoms";

export function useToolbarTools(): {
  lock: boolean;
  toggleFilterMenu: () => void;
  fitScreen: () => void;
  swapLock: () => void;
  rotate: (value: Parameters<typeof rotationControl>[0]) => void;
  flip: (value: Parameters<typeof scaleControl>[0]) => void;
} {
  const toggleFilterMenu = useSetAtom(toggleFilterMenuState);
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
    toggleFilterMenu,
    fitScreen,
    lock,
    swapLock,
    rotate,
    flip,
  };
}
