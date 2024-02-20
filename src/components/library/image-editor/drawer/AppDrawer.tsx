import { useRef, type ReactElement } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { useAppDrawer } from "./UseAppDrawer";

export interface AppDrawerProps {
  onNewImage: () => void;
}

export function AppDrawer({ onNewImage }: AppDrawerProps): ReactElement {
  const menuRef = useRef<HTMLUListElement>(null);
  const { drawerState } = useAppDrawer(menuRef);

  return (
    <div className="drawer z-30">
      <input id="app-drawer" type="checkbox" checked={drawerState} className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <ul
          ref={menuRef}
          className="menu shadow-xl min-h-full w-60 bg-base-100 p-4 text-base text-base-content md:w-80"
        >
          <span className="p-4 text-xl font-bold">Image Editor</span>
          <li onClick={onNewImage}>
            <a>
              <FolderPlusIcon className="h-6 w-6" />
              New Image
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
