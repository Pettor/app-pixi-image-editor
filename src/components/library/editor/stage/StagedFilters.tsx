import { AdjustmentFilter } from "@pixi/filter-adjustment";
import { PixelateFilter } from "@pixi/filter-pixelate";
import { Container, withFilters } from "@pixi/react";
import * as PIXI from "pixi.js";

export interface StagedFilter {
  blur: number;
  brightness: number;
  contrast: number;
  gamma: number;
  saturation: number;
  pixelate: number;
  red: number;
  green: number;
  blue: number;
}

export const StagedFilters = withFilters(Container, {
  adjustement: AdjustmentFilter,
  blur: PIXI.BlurFilter,
  pixelate: PixelateFilter,
});
