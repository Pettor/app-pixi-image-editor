import type { ReactElement } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { zoomAtom } from "../viewport/ViewportAtoms";

export function ToolbarZoom(): ReactElement {
  const [zoom, setZoom] = useAtom(zoomAtom);

  function handleOnZoomIn(): void {
    setZoom((prev) => prev + 10);
  }

  function handleOnZoomOut(): void {
    setZoom((prev) => prev - 10);
  }

  return (
    <div className="absolute bottom-0 left-0 flex justify-center p-4">
      <div className="glass navbar min-h-0 gap-4 rounded-box shadow-xl">
        <button className="btn btn-square btn-ghost btn-sm" onClick={handleOnZoomIn}>
          <PlusIcon />
        </button>
        <h6>{zoom}%</h6>
        <button className="btn btn-square btn-ghost btn-sm" onClick={handleOnZoomOut}>
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}
