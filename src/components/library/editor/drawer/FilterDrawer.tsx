import { useRef, type ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";
import type { StagedFilter } from "../stage/StagedFilters";
import { BlurIcon } from "~/components/icons/filters/BlurIcon";
import { ContrastIcon } from "~/components/icons/filters/ContrastIcon";
import { DropletIcon } from "~/components/icons/filters/DropletIcon";
import { PixelateIcon } from "~/components/icons/filters/PixelateIcon";
import { SunHighIcon } from "~/components/icons/filters/SunHighIcon";

export interface FilterDrawerProps {
  open: boolean;
  blur: number;
  brightness: number;
  contrast: number;
  saturation: number;
  pixelate: number;
  red: number;
  green: number;
  blue: number;
  onFilterChange: (filter: Partial<StagedFilter>) => void;
  onClose: () => void;
}

export function FilterDrawer({
  open,
  onClose,
  blur,
  brightness,
  contrast,
  saturation,
  pixelate,
  red,
  green,
  blue,
  onFilterChange,
}: FilterDrawerProps): ReactElement {
  const menuRef = useRef<HTMLElement>(null);
  useOnClickOutside(menuRef, onClose);

  return (
    <div className="drawer drawer-end z-30">
      <input id="app-drawer" readOnly type="checkbox" checked={open} className="drawer-toggle" />
      <div className="drawer-side overflow-hidden">
        <label htmlFor="app-drawer" aria-label="close sidebar" />
        <ul className="menu flex flex-col flex-wrap bg-neutral-content dark:bg-neutral shadow-xl min-h-full w-60 p-4 text-base text-base-content md:w-96">
          <div className="flex flex-row">
            <span className="flex flex-1 p-4 text-2xl font-bold">Filters</span>
            <div className="flex items-center flex-row">
              <button className="btn btn-circle btn-sm btn-ghost" onClick={onClose}>
                <XMarkIcon />
              </button>
            </div>
          </div>
          <div className="divider divider-vertical h-1/2" />
          <li className="flex gap-2">
            <span className="menu-title text-base font-bold my-2 flex flex-row gap-2">
              <SunHighIcon />
              Brightness
            </span>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={brightness}
              onChange={(e) => onFilterChange({ brightness: Number(e.target.value) })}
              onDoubleClick={() => onFilterChange({ brightness: 1 })}
              className="range range-primary"
            />
            <span className="menu-title text-base font-bold flex flex-row gap-2">
              <ContrastIcon />
              Contrast
            </span>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={contrast}
              onChange={(e) => onFilterChange({ contrast: Number(e.target.value) })}
              className="range range-secondary"
            />
            <span className="menu-title text-base font-bold flex flex-row gap-2">
              <DropletIcon />
              Saturation
            </span>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={saturation}
              onChange={(e) => onFilterChange({ saturation: Number(e.target.value) })}
              className="range range-accent"
            />
          </li>
          <li className="divider divider-vertical h-1/2 mt-8" />
          <li className="flex gap-4">
            <span className="menu-title text-base font-bold flex flex-row gap-2">RGB</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={red}
              onChange={(e) => onFilterChange({ red: Number(e.target.value) })}
              className="range range-error"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={green}
              onChange={(e) => onFilterChange({ green: Number(e.target.value) })}
              className="range range-success"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={blue}
              onChange={(e) => onFilterChange({ blue: Number(e.target.value) })}
              className="range range-info"
            />
          </li>
          <li className="divider divider-vertical h-1/2 mt-8" />
          <li className="flex gap-2">
            <span className="menu-title text-base font-bold flex flex-row gap-2">
              <BlurIcon />
              Blur
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={blur}
              onChange={(e) => onFilterChange({ blur: Number(e.target.value) })}
              className="range range-warning"
            />
            <span className="menu-title text-base font-bold flex flex-row gap-2">
              <PixelateIcon />
              Pixelate
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={pixelate}
              onChange={(e) => onFilterChange({ pixelate: Number(e.target.value) })}
              className="range range-warning"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
