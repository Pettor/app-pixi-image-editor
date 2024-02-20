import { useRef, type ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";

export interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  blur: number;
  onBlurChange: (value: number) => void;
}

export function FilterDrawer({ open, onClose, blur, onBlurChange }: FilterDrawerProps): ReactElement {
  const menuRef = useRef<HTMLElement>(null);
  useOnClickOutside(menuRef, onClose);

  return (
    <div className="drawer drawer-end z-30">
      <input id="app-drawer" type="checkbox" checked={open} className="drawer-toggle" />
      <div className="drawer-side overflow-hidden">
        <label htmlFor="app-drawer" aria-label="close sidebar" />
        <ul className="menu bg-neutral-content dark:bg-neutral shadow-xl min-h-full w-60 p-4 text-base text-base-content md:w-96">
          <div className="flex">
            <span className="flex flex-1 p-4 text-xl font-bold">Filters</span>
            <div className="flex items-center flex-row">
              <button className="btn btn-circle btn-sm btn-ghost" onClick={onClose}>
                <XMarkIcon />
              </button>
            </div>
          </div>
          <li>
            <span className="menu-title text-lg font-bold">Blur</span>
            <input
              type="range"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => onBlurChange(Number(e.target.value))}
              className="range range-accent"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
