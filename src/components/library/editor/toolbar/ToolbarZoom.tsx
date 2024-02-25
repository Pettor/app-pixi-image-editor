import type { ReactElement } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useToolbarZoom } from "./UseToolbarZoom";

export function ToolbarZoom(): ReactElement {
  const { zoom, zoomIn, zoomOut, resetZoom } = useToolbarZoom();

  return (
    <div className="absolute max-md:top-0 max-md:right-0 md:bottom-0 md:left-0 z-10 flex justify-center p-4">
      <div className="glass navbar h-10 min-h-0 w-auto gap-1 md:gap-4 rounded-box border border-neutral-content bg-base-100 bg-opacity-60 shadow-xl md:h-12 dark:bg-neutral dark:bg-opacity-80 dark:bg-none">
        <button className="btn btn-square btn-ghost btn-xs md:btn-sm" onClick={zoomIn}>
          <PlusIcon />
        </button>
        <div className="md:tooltip md:tooltip-top" data-tip="Reset zoom">
          <button className="w-8 md:w-10" onClick={resetZoom}>
            <span className="text-sm">{zoom}%</span>
          </button>
        </div>
        <button className="btn btn-square btn-ghost btn-xs md:btn-sm" onClick={zoomOut}>
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}
