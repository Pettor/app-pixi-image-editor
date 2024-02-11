import type { ReactElement } from "react";
import {
  LockOpenIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  ArrowsUpDownIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useToolbarTools } from "./UseToolbarTools";

export function ToolbarTools(): ReactElement {
  const { fitScreen, lock, swapLock, rotate, flip } = useToolbarTools();

  return (
    <div className="absolute z-10 flex w-full justify-center p-4">
      <div className="glass navbar h-12 min-h-0 w-auto rounded-box border border-neutral-content bg-base-100 bg-opacity-80 shadow-xl">
        <div className="tooltip tooltip-bottom" data-tip={lock ? undefined : "Lock image to center"}>
          <button
            className={clsx("btn btn-square btn-ghost swap btn-sm ml-2", lock && "btn-active")}
            onClick={swapLock}
          >
            <input type="checkbox" checked={lock} onChange={swapLock} />
            <LockClosedIcon className="swap-on h-6 w-6" />
            <LockOpenIcon className="swap-off h-6 w-6" />
          </button>
        </div>
        <div className="divider divider-horizontal mx-1" />
        <div className="tooltip tooltip-bottom" data-tip="Fit to screen">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={fitScreen}>
            <ArrowsPointingInIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="divider divider-horizontal mx-1" />
        <div className="tooltip tooltip-bottom" data-tip="Flip vertical">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => flip("flip-vertical")}>
            <ArrowsUpDownIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Flip horizontal">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => flip("flip-horizontal")}>
            <ArrowsRightLeftIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Rotate 90° left">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => rotate("rotate-left")}>
            <ArrowPathIcon className="h-6 w-6 -scale-x-100" />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Rotate 90° right">
          <button className="btn btn-square btn-ghost swap btn-sm ml-2" onClick={() => rotate("rotate-right")}>
            <ArrowPathIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
