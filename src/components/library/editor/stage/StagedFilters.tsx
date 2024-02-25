import { AdjustmentFilter } from "@pixi/filter-adjustment";
import { Container, withFilters } from "@pixi/react";
import * as PIXI from "pixi.js";

export const StagedFilters = withFilters(Container, {
  adjustement: AdjustmentFilter,
  blur: PIXI.BlurFilter,
});
