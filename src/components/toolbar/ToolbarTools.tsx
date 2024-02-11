import type { ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { lockAtom } from "~/components/viewport/ViewportAtoms";

export function ToolbarTools(): ReactElement {
  const [lock, setLockAtom] = useAtom(lockAtom);

  function handleOnChangeLock(): void {
    setLockAtom((prev) => !prev);
  }

  return (
    <div className="absolute flex w-full justify-center p-4">
      <div className="navbar w-6/12 rounded-box border border-neutral-content bg-base-100 shadow-xl">
        <div className="ml-1 flex-1">
          <button className="btn btn-square btn-ghost btn-sm">
            <Bars3Icon />
          </button>
        </div>
        <div className="flex-none">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">Lock</span>
            <input type="checkbox" checked={lock} className="checkbox" onChange={handleOnChangeLock} />
          </label>
        </div>
      </div>
    </div>
  );
}
