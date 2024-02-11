import { useRef, type ReactElement } from "react";
import { Stage } from "@pixi/react";
import { useElementSize } from "usehooks-ts";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { useStageImage } from "./UseStageImage";
import { useStageViewport } from "./UseStageViewport";
import type { ViewportExtended } from "~/components/viewport/ViewportExtended";

export function StageComponent(): ReactElement {
  const viewportRef = useRef<ViewportExtended>(null);
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const { stageOptions, lock, zoom, zoomIn } = useStageViewport();
  const { imageUrl, imageWidth, imageHeight } = useStageImage();

  return (
    <div ref={ref} className="flex-1 overflow-hidden rounded-lg border-2 border-white">
      <Stage width={containerWidth} height={containerHeight} options={stageOptions}>
        <StagedViewport
          ref={viewportRef}
          worldWidth={imageWidth}
          worldHeight={imageHeight}
          screenWidth={containerWidth}
          screenHeight={containerHeight}
          lock={lock}
          zoom={zoom}
          onZoomed={zoomIn}
        >
          <StagedImage imageUrl={imageUrl} />
        </StagedViewport>
      </Stage>
    </div>
  );
}
