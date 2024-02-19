import { useRef, type ReactElement } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { useAtomValue, useSetAtom } from "jotai";
import { useOnClickOutside } from "usehooks-ts";
import { drawerOpenedAtom, toggleDrawerAtom } from "../atoms/DrawerAtoms";

export interface AppDrawerProps {
  onNewImage: () => void;
}

export function AppDrawer({ onNewImage }: AppDrawerProps): ReactElement {
  const drawerState = useAtomValue(drawerOpenedAtom);
  const swapDrawer = useSetAtom(toggleDrawerAtom);
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, () => drawerState && swapDrawer());

  return (
    <div className="drawer z-30">
      <input id="my-drawer" type="checkbox" checked={drawerState} className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />

        <ul ref={menuRef} className="menu min-h-full w-60 bg-base-200 p-4 text-base text-base-content md:w-80">
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
