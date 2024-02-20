import { useRef, type ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFilterDrawer } from "./UseFilterDrawer";

export function FilterDrawer(): ReactElement {
  const menuRef = useRef<HTMLUListElement>(null);
  const { drawerState, toggleDrawer } = useFilterDrawer(menuRef);

  return (
    <div className="drawer drawer-end z-30">
      <input id="app-drawer" type="checkbox" checked={drawerState} className="drawer-toggle" />
      <div className="drawer-side overflow-hidden">
        <label htmlFor="app-drawer" aria-label="close sidebar" />
        <ul className="menu bg-neutral-content dark:bg-neutral shadow-xl min-h-full w-60 p-4 text-base text-base-content md:w-96">
          <div className="flex">
            <span className="flex flex-1 p-4 text-xl font-bold">Filters</span>
            <button className="btn btn-circle btn-sm btn-ghost" onClick={toggleDrawer}>
              <XMarkIcon />
            </button>
          </div>
          <li>
            <a>Blur</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
