import type { ReactElement } from "react";
import { LockOpenIcon, LockClosedIcon, ArrowsPointingInIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useToolbarTools } from "./UseToolbarTools";
import { FlipHorizontalIcon } from "~/assets/icons/FlipHorizontalIcon";
import { FlipVerticalIcon } from "~/assets/icons/FlipVerticalIcon";
import { RotateCcwIcon } from "~/assets/icons/RotateCcwIcon";
import { RotateCwIcon } from "~/assets/icons/RotateCwIcon";

export function ToolbarTools(): ReactElement {
  const { fitScreen, lock, swapLock, rotate, flip } = useToolbarTools();

  return (
    <div className="absolute z-10 mr-2 flex w-full justify-center p-4 md:mr-0">
      <div className="glass navbar h-10 min-h-0 w-auto rounded-box border border-neutral bg-base-300 bg-opacity-60 shadow-xl md:h-12 dark:bg-opacity-80 dark:bg-none">
        <div className="tooltip tooltip-bottom" data-tip={lock ? undefined : "Lock image to center"}>
          <button
            className={clsx("btn btn-square btn-ghost swap btn-sm ml-2", lock && "btn-active")}
            onClick={swapLock}
          >
            <input type="checkbox" checked={lock} onChange={swapLock} />
            <LockClosedIcon className="swap-on h-4 w-4 md:h-6 md:w-6" />
            <LockOpenIcon className="swap-off h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="divider divider-horizontal mx-0 w-0 md:mx-1 md:w-2" />
        <div className="tooltip tooltip-bottom" data-tip="Fit to screen">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={fitScreen}>
            <ArrowsPointingInIcon className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="divider divider-horizontal mx-0 w-0 md:mx-1 md:w-2" />
        <div className="tooltip tooltip-bottom" data-tip="Rotate 90° right">
          <button className="btn btn-square btn-ghost swap btn-sm ml-2" onClick={() => rotate("rotate-right")}>
            <RotateCcwIcon />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Rotate 90° left">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => rotate("rotate-left")}>
            <RotateCwIcon />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Flip vertical">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => flip("flip-vertical")}>
            <FlipVerticalIcon />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Flip horizontal">
          <button className="btn btn-square btn-ghost swap btn-sm ml-1" onClick={() => flip("flip-horizontal")}>
            <FlipHorizontalIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
