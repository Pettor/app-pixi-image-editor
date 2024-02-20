import { type ReactElement } from "react";
import { Stage } from "@pixi/react";
import { useAtomValue } from "jotai";
import { useElementSize } from "usehooks-ts";
import { maxZoomAtom, minZoomAtom } from "../atoms/viewport/ZoomAtoms";
import { StagedFilters } from "./StagedFilters";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { useStageFilters } from "./UseStageFilters";
import { useStageImage } from "./UseStageImage";
import { useStageSetup } from "./UseStageSetup";
import { useStageViewport } from "./UseStageViewport";

export function StageComponent(): ReactElement {
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const { stageOptions, lock, scale, rotation, zoom, setZoom } = useStageViewport();
  const { imageUrl, imageWidth, imageHeight } = useStageImage();
  const { registerViewport } = useStageSetup();
  const { blur } = useStageFilters();
  const minZoom = useAtomValue(minZoomAtom);
  const maxZoom = useAtomValue(maxZoomAtom);

  return (
    <div ref={ref} className="flex-1 overflow-hidden rounded-lg border-4 border-base-100">
      <Stage width={containerWidth} height={containerHeight} options={stageOptions}>
        <StagedFilters blur={{ blur }}>
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
          >
            <StagedImage
              imageUrl={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              scale={scale}
              rotation={rotation}
            />
          </StagedViewport>
        </StagedFilters>
      </Stage>
    </div>
  );
}
