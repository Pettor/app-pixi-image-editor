import { useRef, type ReactElement } from "react";
import { Stage as PixiStage, Sprite as PixiSprite } from "@pixi/react";
import { useAtomValue } from "jotai/react";
import type { Viewport as PixiViewport } from "pixi-viewport";
import { useElementSize } from "usehooks-ts";
import { imageAtom, imageUrlAtom } from "../libs/atoms/ImageAtom";
import { Viewport } from "./Viewport";
import { stageOptionsAtom } from "~/libs/atoms/StageAtom";

export function Stage(): ReactElement {
  const { width: imageWidth, height: imageHeight } = useAtomValue(imageAtom) ?? { width: 0, height: 0 };
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const imageUrl = useAtomValue(imageUrlAtom);
  const stageOptions = useAtomValue(stageOptionsAtom);
  const viewportRef = useRef<PixiViewport>(null);

  return (
    <div ref={ref} className="flex-1 overflow-hidden rounded-lg border-2 border-neutral">
      <PixiStage width={containerWidth} height={containerHeight} options={stageOptions}>
        <Viewport
          ref={viewportRef}
          worldWidth={imageWidth}
          worldHeight={imageHeight}
          screenWidth={containerWidth}
          screenHeight={containerHeight}
        >
          <PixiSprite image={imageUrl} />
        </Viewport>
      </PixiStage>
    </div>
  );
}
