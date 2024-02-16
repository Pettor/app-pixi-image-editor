import type { MouseEvent } from "react";
import { useState, type ReactElement, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";

export interface ToolbarMenuProps {
  onNewImage: () => void;
}

export function ToolbarMenu({ onNewImage }: ToolbarMenuProps): ReactElement {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, () => setAnchorEl(null));

  function handleMenuClick(event: MouseEvent): void {
    if (anchorEl) {
      setAnchorEl(null);
      return;
    }

    setAnchorEl(event.currentTarget as HTMLElement);
  }

  function contextMenu(): ReactElement {
    return (
      <div className="absolute bottom-16 right-5 z-10 md:left-5 md:top-16">
        <ul ref={menuRef} className="menu w-56 rounded-box bg-base-200 shadow-xl">
          <li onClick={onNewImage}>
            <a>New Image</a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="absolute z-20 flex items-center justify-center p-4 max-sm:bottom-0 max-sm:right-0">
      <div className="glass navbar flex h-10 min-h-0 rounded-box bg-base-300 bg-opacity-80 shadow-xl md:h-12 dark:bg-opacity-80 dark:bg-none">
        <button className="btn btn-square btn-ghost btn-sm" onClick={handleMenuClick}>
          <Bars3Icon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      {anchorEl && contextMenu()}
    </div>
  );
}
