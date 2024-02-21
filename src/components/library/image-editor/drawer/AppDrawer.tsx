import { useRef, type ReactElement } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";
import type { ThemeSwitchProps } from "../../theme-controller/ThemeSwitch";
import { ThemeSwitch } from "../../theme-controller/ThemeSwitch";

export interface AppDrawerProps {
  open: boolean;
  themeSwitchProps: ThemeSwitchProps;
  onClose: () => void;
  onNewImage: () => void;
}

export function AppDrawer({ open, themeSwitchProps, onClose, onNewImage }: AppDrawerProps): ReactElement {
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, onClose);

  return (
    <div className="drawer z-30">
      <input id="app-drawer" readOnly type="checkbox" checked={open} className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <ul
          ref={menuRef}
          className="menu shadow-xl min-h-full w-60 bg-base-100 p-4 text-base text-base-content md:w-80"
        >
          <div className="flex">
            <span className="flex flex-1 p-4 text-xl font-bold">Image Editor</span>
            <div className="flex items-center flex-row">
              <ThemeSwitch {...themeSwitchProps} />
            </div>
          </div>
          <li onClick={onNewImage}>
            <a>
              <FolderPlusIcon className="h-6 w-6" />
              New Image
            </a>
          </li>
          <div className="flex flex-1"></div>
        </ul>
      </div>
    </div>
  );
}
