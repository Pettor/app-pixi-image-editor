import type { ReactElement } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useToolbarZoom } from "./UseToolbarZoom";

export function ToolbarZoom(): ReactElement {
  const { zoom, zoomIn, zoomOut, resetZoom } = useToolbarZoom();

  return (
    <div className="absolute bottom-0 left-0 z-10 flex justify-center p-4">
      <div className="glass navbar min-h-0 gap-4 rounded-box bg-neutral-content bg-opacity-60 shadow-xl">
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
