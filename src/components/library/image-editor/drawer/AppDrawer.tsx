import { useRef, type ReactElement } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";

export interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  onNewImage: () => void;
}

export function AppDrawer({ open, onClose, onNewImage }: AppDrawerProps): ReactElement {
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, onClose);

  return (
    <div className="drawer z-30">
      <input id="app-drawer" type="checkbox" checked={open} className="drawer-toggle" />
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
