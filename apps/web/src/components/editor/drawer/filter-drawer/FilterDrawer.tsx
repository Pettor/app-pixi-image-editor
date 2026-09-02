import { type ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useIntl } from "react-intl";
import type { StagedFilter } from "../../stage/StagedFilters";
import { FilterSlider } from "./filter-slider/FilterSlider";
import { BlurIcon } from "~/components/icons/filters/BlurIcon";
import { ContrastIcon } from "~/components/icons/filters/ContrastIcon";
import { DropletIcon } from "~/components/icons/filters/DropletIcon";
import { PixelateIcon } from "~/components/icons/filters/PixelateIcon";
import { RgbIcon } from "~/components/icons/filters/RgbIcon";
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
  const intl = useIntl();

  return (
    <div className="drawer drawer-end z-30">
      <input
        id="filter-drawer"
        type="checkbox"
        checked={open}
        onChange={() => {}}
        className="drawer-toggle"
        aria-label={intl.formatMessage({
          description: "FilterDrawer - drawer toggle label",
          defaultMessage: "Filters panel",
          id: "4kBXHm",
        })}
      />
      <div className="drawer-content" />
      <div className="drawer-side">
        <label htmlFor="filter-drawer" aria-hidden="true" className="drawer-overlay" onClick={onClose} />
        <div className="bg-base-100 text-base-content flex min-h-full w-64 flex-col overflow-y-auto shadow-2xl md:w-96">
          <div className="border-base-200 flex items-center justify-between border-b px-5 py-4">
            <h2 className="text-lg font-bold">
              {intl.formatMessage({
                description: "FilterDrawer - heading",
                defaultMessage: "Filters",
                id: "/KooDq",
              })}
            </h2>
            <button
              className="btn btn-circle btn-ghost btn-sm"
              onClick={onClose}
              aria-label={intl.formatMessage({
                description: "FilterDrawer - close button label",
                defaultMessage: "Close filters",
                id: "fmaprX",
              })}
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-5 p-5">
            <section className="flex flex-col gap-3">
              <FilterSlider
                label={intl.formatMessage({
                  description: "FilterDrawer - brightness label",
                  defaultMessage: "Brightness",
                  id: "vLbpzr",
                })}
                resetLabel={intl.formatMessage({
                  description: "FilterDrawer - brightness reset button",
                  defaultMessage: "Reset",
                  id: "FA4gJk",
                })}
                icon={<SunHighIcon />}
                value={brightness}
                min={0}
                max={2}
                step={0.1}
                rangeClassName="range-primary"
                ariaLabel={intl.formatMessage({
                  description: "FilterDrawer - brightness range label",
                  defaultMessage: "Brightness",
                  id: "kBJYNO",
                })}
                onReset={() => onFilterChange({ brightness: 1 })}
                onChange={(v) => onFilterChange({ brightness: v })}
              />
              <FilterSlider
                label={intl.formatMessage({
                  description: "FilterDrawer - contrast label",
                  defaultMessage: "Contrast",
                  id: "ezGDmB",
                })}
                resetLabel={intl.formatMessage({
                  description: "FilterDrawer - contrast reset button",
                  defaultMessage: "Reset",
                  id: "wKTL6l",
                })}
                icon={<ContrastIcon />}
                value={contrast}
                min={0}
                max={2}
                step={0.1}
                rangeClassName="range-secondary"
                ariaLabel={intl.formatMessage({
                  description: "FilterDrawer - contrast range label",
                  defaultMessage: "Contrast",
                  id: "b+o2v+",
                })}
                onReset={() => onFilterChange({ contrast: 1 })}
                onChange={(v) => onFilterChange({ contrast: v })}
              />
              <FilterSlider
                label={intl.formatMessage({
                  description: "FilterDrawer - saturation label",
                  defaultMessage: "Saturation",
                  id: "ePAnyC",
                })}
                resetLabel={intl.formatMessage({
                  description: "FilterDrawer - saturation reset button",
                  defaultMessage: "Reset",
                  id: "IzopCO",
                })}
                icon={<DropletIcon />}
                value={saturation}
                min={0}
                max={2}
                step={0.1}
                rangeClassName="range-accent"
                ariaLabel={intl.formatMessage({
                  description: "FilterDrawer - saturation range label",
                  defaultMessage: "Saturation",
                  id: "P0xQ0y",
                })}
                onReset={() => onFilterChange({ saturation: 1 })}
                onChange={(v) => onFilterChange({ saturation: v })}
              />
            </section>

            <div className="divider my-0" />

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-1">
                <RgbIcon />
                <span className="flex-1 text-sm font-bold">
                  {intl.formatMessage({
                    description: "FilterDrawer - RGB label",
                    defaultMessage: "RGB",
                    id: "Z5FJ/V",
                  })}
                </span>
                <button
                  className="btn btn-ghost btn-xs"
                  data-testid="filter-drawer__rgb-reset"
                  onClick={() => onFilterChange({ red: 1, green: 1, blue: 1 })}
                >
                  {intl.formatMessage({
                    description: "FilterDrawer - RGB reset button",
                    defaultMessage: "Reset",
                    id: "gMQ/y6",
                  })}
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-1">
                  <span className="badge badge-error badge-sm w-2 rounded-full p-0" />
                  <span className="text-xs font-semibold">
                    {intl.formatMessage({
                      description: "FilterDrawer - red channel label",
                      defaultMessage: "Red",
                      id: "PFn0vd",
                    })}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={red}
                    onChange={(e) => onFilterChange({ red: Number(e.target.value) })}
                    className="range range-error flex-1"
                    aria-label={intl.formatMessage({
                      description: "FilterDrawer - red channel range label",
                      defaultMessage: "Red",
                      id: "kdXJKf",
                    })}
                  />
                </div>
                <div className="flex items-center gap-2 px-1">
                  <span className="badge badge-success badge-sm w-2 rounded-full p-0" />
                  <span className="text-xs font-semibold">
                    {intl.formatMessage({
                      description: "FilterDrawer - green channel label",
                      defaultMessage: "Green",
                      id: "Nfl76t",
                    })}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={green}
                    onChange={(e) => onFilterChange({ green: Number(e.target.value) })}
                    className="range range-success flex-1"
                    aria-label={intl.formatMessage({
                      description: "FilterDrawer - green channel range label",
                      defaultMessage: "Green",
                      id: "Olg+FI",
                    })}
                  />
                </div>
                <div className="flex items-center gap-2 px-1">
                  <span className="badge badge-info badge-sm w-2 rounded-full p-0" />
                  <span className="text-xs font-semibold">
                    {intl.formatMessage({
                      description: "FilterDrawer - blue channel label",
                      defaultMessage: "Blue",
                      id: "PDdb7w",
                    })}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={blue}
                    onChange={(e) => onFilterChange({ blue: Number(e.target.value) })}
                    className="range range-info flex-1"
                    aria-label={intl.formatMessage({
                      description: "FilterDrawer - blue channel range label",
                      defaultMessage: "Blue",
                      id: "XW3FAa",
                    })}
                  />
                </div>
              </div>
            </section>

            <div className="divider my-0" />

            <section className="flex flex-col gap-3">
              <FilterSlider
                label={intl.formatMessage({
                  description: "FilterDrawer - blur label",
                  defaultMessage: "Blur",
                  id: "74q6H9",
                })}
                resetLabel={intl.formatMessage({
                  description: "FilterDrawer - blur reset button",
                  defaultMessage: "Reset",
                  id: "UPuHPc",
                })}
                icon={<BlurIcon />}
                value={blur}
                min={0}
                max={100}
                step={1}
                rangeClassName="range-warning"
                ariaLabel={intl.formatMessage({
                  description: "FilterDrawer - blur range label",
                  defaultMessage: "Blur",
                  id: "B53Gl7",
                })}
                onReset={() => onFilterChange({ blur: 0 })}
                onChange={(v) => onFilterChange({ blur: v })}
              />
              <FilterSlider
                label={intl.formatMessage({
                  description: "FilterDrawer - pixelate label",
                  defaultMessage: "Pixelate",
                  id: "/gpQ2N",
                })}
                resetLabel={intl.formatMessage({
                  description: "FilterDrawer - pixelate reset button",
                  defaultMessage: "Reset",
                  id: "KSlneJ",
                })}
                icon={<PixelateIcon />}
                value={pixelate}
                min={0}
                max={100}
                step={1}
                rangeClassName="range-warning"
                ariaLabel={intl.formatMessage({
                  description: "FilterDrawer - pixelate range label",
                  defaultMessage: "Pixelate",
                  id: "axtUEA",
                })}
                onReset={() => onFilterChange({ pixelate: 0 })}
                onChange={(v) => onFilterChange({ pixelate: v })}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
