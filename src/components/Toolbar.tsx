import type { ReactElement } from "react";
import { useAtom } from "jotai";
import { lockAtom } from "~/libs/atoms/ViewportAtoms";

export function Toolbar(): ReactElement {
  const [lock, setLockAtom] = useAtom(lockAtom);

  function handleOnChangeLock(): void {
    setLockAtom((prev) => !prev);
  }

  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Image Editor</a>
      </div>
      <div className="flex-none">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Lock</span>
          <input type="checkbox" checked={lock} className="checkbox" onChange={handleOnChangeLock} />
        </label>
      </div>
    </div>
  );
}
