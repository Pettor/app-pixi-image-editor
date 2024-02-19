import { type ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import { toggleDrawerAtom } from "../atoms/DrawerAtoms";

export function ToolbarMenu(): ReactElement {
  const toggleDrawer = useSetAtom(toggleDrawerAtom);

  return (
    <div className="absolute z-20 flex items-center justify-center p-4 max-sm:bottom-0 max-sm:right-0">
      <div className="glass navbar flex h-10 min-h-0 rounded-box bg-base-300 bg-opacity-80 shadow-xl dark:bg-opacity-80 dark:bg-none md:h-12">
        <button className="btn btn-square btn-ghost btn-sm" onClick={toggleDrawer}>
          <Bars3Icon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}
