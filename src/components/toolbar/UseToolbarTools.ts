import { useAtom, useSetAtom } from "jotai";
import { lockAtom, lockControlAtom } from "../viewport/ViewportAtoms";

export function useToolbarTools(): {
  lock: boolean;
  swapLock: () => void;
} {
  const [lock] = useAtom(lockAtom);
  const lockControl = useSetAtom(lockControlAtom);

  function swapLock(): void {
    lockControl();
  }

  return {
    lock,
    swapLock,
  };
}
