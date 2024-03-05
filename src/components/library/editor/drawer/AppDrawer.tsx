import { useRef, type ReactElement } from "react";
import { FolderPlusIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";
import type { ThemeSwitchProps } from "../../theme/ThemeSwitch";
import { ThemeSwitch } from "../../theme/ThemeSwitch";
import LogoImageSrc from "~/assets/images/logo/Logo320.png";

export interface AppDrawerProps {
  open: boolean;
  themeSwitchProps: ThemeSwitchProps;
  onClose: () => void;
  onNewImage: () => void;
  onSaveImage: () => void;
}

export function AppDrawer({ open, themeSwitchProps, onClose, onNewImage, onSaveImage }: AppDrawerProps): ReactElement {
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, onClose);

  return (
    <div className="drawer z-30">
      <input id="app-drawer" readOnly type="checkbox" checked={open} className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <ul
          ref={menuRef}
          className="menu min-h-full w-60 bg-base-100 p-4 text-base text-base-content shadow-xl md:w-80"
        >
          <div className="flex items-center">
            <img className="h-10 w-10" src={LogoImageSrc} alt="Pixi Image Editor Logo" />
            <span className="flex flex-1 p-4 text-xl font-bold">Pixi Image Editor</span>
          </div>
          <li className="mt-4" onClick={onNewImage}>
            <a>
              <FolderPlusIcon className="h-6 w-6" />
              New Image
            </a>
          </li>
          <li className="mt-4" onClick={onSaveImage}>
            <a>
              <ArrowDownTrayIcon className="h-6 w-6" />
              Save Image
            </a>
          </li>
          <div className="flex flex-1" />
          <div className="flex flex-row items-center justify-end">
            <ThemeSwitch {...themeSwitchProps} />
          </div>
        </ul>
      </div>
    </div>
  );
}
