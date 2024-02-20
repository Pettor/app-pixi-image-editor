import { type ReactElement } from "react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import { Container, Stage, withFilters } from "@pixi/react";
import * as PIXI from "pixi.js";
import { useElementSize } from "usehooks-ts";
import { MAXIMUM_ZOOM, MINIMUM_ZOOM } from "../constants/ZoomConstants";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { useStageImage } from "./UseStageImage";
import { useStageSetup } from "./UseStageSetup";
import { useStageViewport } from "./UseStageViewport";

const Filters = withFilters(Container, {
  adjustement: AdjustmentFilter,
  blur: PIXI.BlurFilter,
});

export function StageComponent(): ReactElement {
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const { stageOptions, lock, scale, rotation, zoom, setZoom } = useStageViewport();
  const { imageUrl, imageWidth, imageHeight } = useStageImage();
  const { registerViewport } = useStageSetup();

  return (
    <div ref={ref} className="flex-1 overflow-hidden rounded-lg border-4 border-base-100">
      <Stage width={containerWidth} height={containerHeight} options={stageOptions}>
        <StagedViewport
          ref={registerViewport}
          worldWidth={imageWidth}
          worldHeight={imageHeight}
          screenWidth={containerWidth}
          screenHeight={containerHeight}
          lock={lock}
          zoom={zoom}
          maxZoom={MAXIMUM_ZOOM}
          minZoom={MINIMUM_ZOOM}
          onZoomed={setZoom}
        >
          {/* <Filters adjustement={{ gamma: 0.5, brightness: 0.5 }} blur={{ blur: 3 }}> */}
          <StagedImage
            imageUrl={imageUrl}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            scale={scale}
            rotation={rotation}
          />
          {/* </Filters> */}
        </StagedViewport>
      </Stage>
    </div>
  );
}
