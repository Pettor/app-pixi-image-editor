import type { ReactElement } from "react";
import { LockOpenIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useToolbarAdjustZoom } from "./UseToolbarAdjustZoom";
import { useToolbarTools } from "./UseToolbarTools";
import { FitViewIcon } from "~/components/icons/FitViewIcon";
import { FlipHorizontalIcon } from "~/components/icons/FlipHorizontalIcon";
import { FlipVerticalIcon } from "~/components/icons/FlipVerticalIcon";
import { FullscreenIcon } from "~/components/icons/FullscreenIcon";
import { RotateCcwIcon } from "~/components/icons/RotateCcwIcon";
import { RotateCwIcon } from "~/components/icons/RotateCwIcon";
import { SparklesIcon } from "~/components/icons/SparklesIcon";

export function ToolbarTools(): ReactElement {
  const { lock, swapLock, rotate, flip, toggleFilterMenu } = useToolbarTools();
  const { adjustZoom, showFitScreen } = useToolbarAdjustZoom();

  return (
    <div className="absolute z-10 mr-2 flex w-full justify-center p-4 md:mr-0">
      <div className="glass gap-1 md:gap-2 navbar h-10 min-h-0 w-auto rounded-box border border-neutral bg-base-300 bg-opacity-80 shadow-xl md:h-12 dark:bg-opacity-80 dark:bg-none">
        <div className="tooltip tooltip-bottom" data-tip={lock ? undefined : "Lock image to center"}>
          <button className={clsx("btn btn-square btn-ghost swap btn-sm", lock && "btn-active")} onClick={swapLock}>
            <input type="checkbox" checked={lock} onChange={swapLock} />
            <LockClosedIcon className="swap-on h-6 w-6" />
            <LockOpenIcon className="swap-off h-6 w-6" />
          </button>
        </div>
        <div className="divider divider-horizontal w-0 mx-0" />
        <div className="tooltip tooltip-bottom mt-1" data-tip={showFitScreen ? "Actual size" : "Fit to window"}>
          <button className="btn btn-square btn-ghost swap btn-sm" onClick={adjustZoom}>
            {showFitScreen ? <FullscreenIcon /> : <FitViewIcon />}
          </button>
        </div>
        <div className="divider divider-horizontal w-0 mx-0" />
        <div className="flex gap-1">
          <div className="tooltip tooltip-bottom mt-1" data-tip="Rotate 90° right">
            <button className="btn btn-square btn-ghost swap btn-sm" onClick={() => rotate("rotate-right")}>
              <RotateCcwIcon />
            </button>
          </div>
          <div className="tooltip tooltip-bottom mt-1" data-tip="Rotate 90° left">
            <button className="btn btn-square btn-ghost swap btn-sm" onClick={() => rotate("rotate-left")}>
              <RotateCwIcon />
            </button>
          </div>
          <div className="tooltip tooltip-bottom mt-1" data-tip="Flip vertical">
            <button className="btn btn-square btn-ghost swap btn-sm" onClick={() => flip("flip-vertical")}>
              <FlipVerticalIcon />
            </button>
          </div>
          <div className="tooltip tooltip-bottom mt-1" data-tip="Flip horizontal">
            <button className="btn btn-square btn-ghost swap btn-sm" onClick={() => flip("flip-horizontal")}>
              <FlipHorizontalIcon />
            </button>
          </div>
        </div>
        <div className="divider divider-horizontal mx-0 w-0" />
        <button className="btn btn-ghost max-sm:btn-square btn-sm" onClick={toggleFilterMenu}>
          <SparklesIcon />
          <span className="hidden sm:block">Filters</span>
        </button>
      </div>
    </div>
  );
}
