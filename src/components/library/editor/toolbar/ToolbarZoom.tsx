import type { ReactElement } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useToolbarZoom } from "./UseToolbarZoom";

export function ToolbarZoom(): ReactElement {
  const { zoom, zoomIn, zoomOut, resetZoom } = useToolbarZoom();

  return (
    <div className="absolute bottom-0 left-0 z-10 flex justify-center p-4">
      <div className="glass navbar h-10 min-h-0 w-auto gap-4 rounded-box border border-neutral-content bg-base-100 bg-opacity-60 shadow-xl md:h-12 dark:bg-neutral dark:bg-opacity-80 dark:bg-none">
        <button className="btn btn-square btn-ghost btn-sm" onClick={zoomIn}>
          <PlusIcon />
        </button>
        <div className="tooltip tooltip-top" data-tip="Reset zoom">
          <button onClick={resetZoom}>
            <h6>{zoom}%</h6>
          </button>
        </div>
        <button className="btn btn-square btn-ghost btn-sm" onClick={zoomOut}>
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}
