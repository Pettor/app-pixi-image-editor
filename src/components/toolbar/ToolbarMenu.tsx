import type { ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export function ToolbarMenu(): ReactElement {
  return (
    <div className="absolute z-20 flex items-center justify-center p-4">
      <div className="glass navbar flex h-12 min-h-0 rounded-box bg-base-100 bg-opacity-80 shadow-xl">
        <button className="btn btn-square btn-ghost btn-sm">
          <Bars3Icon />
        </button>
      </div>
    </div>
  );
}
