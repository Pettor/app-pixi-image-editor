import { type ReactElement } from "react";
import { Stage } from "@pixi/react";
import { useElementSize } from "usehooks-ts";
import { StagedFilters } from "./StagedFilters";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { useStageFilters } from "./UseStageFilters";
import { useStageImage } from "./UseStageImage";
import { useStageSetup } from "./UseStageSetup";
import { useStageViewport } from "./UseStageViewport";

export function StageComponent(): ReactElement {
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const { stageOptions, lock, scale, rotation, isRotated, zoom, minZoom, maxZoom, setZoom } = useStageViewport();
  const { imageUrl, imageWidth, imageHeight } = useStageImage();
  const { registerViewport } = useStageSetup();
  const { blur, brightness, contrast, saturation, pixelate, red, green, blue } = useStageFilters();

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
          maxZoom={maxZoom}
          minZoom={minZoom}
          onZoomed={setZoom}
          rotated={isRotated}
        >
          <StagedFilters
            blur={{ blur }}
            adjustement={{ brightness, contrast, saturation, red, green, blue }}
            pixelate={{ enabled: pixelate > 0, size: pixelate }}
          >
            <StagedImage
              imageUrl={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              scale={scale}
              rotation={rotation}
            />
          </StagedFilters>
        </StagedViewport>
      </Stage>
    </div>
  );
}
