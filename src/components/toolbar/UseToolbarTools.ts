import { useAtom } from "jotai";
import { lockAtom } from "../viewport/ViewportAtoms";

export function useToolbarTools(): {
  lock: boolean;
  swapLock: () => void;
} {
  const [lock, setLockAtom] = useAtom(lockAtom);

  function swapLock(): void {
    setLockAtom((prev) => !prev);
  }

  return {
    lock,
    swapLock,
  };
}
