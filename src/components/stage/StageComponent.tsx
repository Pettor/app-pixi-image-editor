import { type ReactElement } from "react";
import { Stage } from "@pixi/react";
import { useSetAtom } from "jotai";
import { useElementSize } from "usehooks-ts";
import { viewportAtom } from "../atoms/viewport/ViewportAtoms";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { useStageImage } from "./UseStageImage";
import { useStageViewport } from "./UseStageViewport";

export function StageComponent(): ReactElement {
  const setViewport = useSetAtom(viewportAtom);
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const { stageOptions, lock, scale, rotation, zoom, setZoom } = useStageViewport();
  const { imageUrl, imageWidth, imageHeight } = useStageImage();

  return (
    <div ref={ref} className="flex-1 overflow-hidden rounded-lg border-4 border-base-100">
      <Stage width={containerWidth} height={containerHeight} options={stageOptions}>
        <StagedViewport
          ref={setViewport}
          worldWidth={imageWidth}
          worldHeight={imageHeight}
          screenWidth={containerWidth}
          screenHeight={containerHeight}
          lock={lock}
          zoom={zoom}
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
      </Stage>
    </div>
  );
}
