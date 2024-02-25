import { type ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useToolbarMenu } from "./UseToolbarMenu";

export function ToolbarMenu(): ReactElement {
  const { toggleDrawer } = useToolbarMenu();

  return (
    <div className="absolute max-md:top-0 max-md:left-0 md:top-0 md:left-0 z-20 flex justify-center p-4">
      <div className="glass navbar flex h-10 min-h-0 rounded-box bg-base-300 bg-opacity-80 shadow-xl md:h-12 dark:bg-opacity-80 dark:bg-none">
        <button className="btn btn-square btn-ghost btn-sm" onClick={toggleDrawer}>
          <Bars3Icon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}
