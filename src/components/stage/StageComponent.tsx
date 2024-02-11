import { useRef, type ReactElement } from "react";
import { Stage } from "@pixi/react";
import { useAtom, useAtomValue } from "jotai/react";
import { useElementSize } from "usehooks-ts";
import { imageAtom, imageUrlAtom } from "../core/CoreAtoms";
import { StagedImage } from "./StagedImage";
import { StagedViewport } from "./StagedViewport";
import { stageOptionsAtom } from "~/components/stage/StageAtoms";
import { lockAtom, zoomAtom } from "~/components/viewport/ViewportAtoms";
import type { ViewportExtended } from "~/components/viewport/ViewportExtended";

export function StageComponent(): ReactElement {
  const { width: imageWidth, height: imageHeight } = useAtomValue(imageAtom) ?? { width: 0, height: 0 };
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const imageUrl = useAtomValue(imageUrlAtom);
  const stageOptions = useAtomValue(stageOptionsAtom);
  const lock = useAtomValue(lockAtom);
  const [zoom, setZoom] = useAtom(zoomAtom);
  const viewportRef = useRef<ViewportExtended>(null);

  function handleOnZoomIn(value: number): void {
    setZoom(Math.floor(value * 100));
  }

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
          onZoomed={handleOnZoomIn}
        >
          <StagedImage imageUrl={imageUrl} />
        </StagedViewport>
      </Stage>
    </div>
  );
}
