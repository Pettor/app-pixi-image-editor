import { useRef, type ReactElement } from "react";
import { Stage as PixiStage, Sprite as PixiSprite } from "@pixi/react";
import { useAtomValue } from "jotai/react";
import { useElementSize } from "usehooks-ts";
import { imageAtom, imageUrlAtom } from "../libs/atoms/ImageAtoms";
import { Viewport } from "./Viewport";
import { stageOptionsAtom } from "~/libs/atoms/StageAtoms";
import { lockAtom } from "~/libs/atoms/ViewportAtoms";
import type { PixiViewport } from "~/libs/react/pixi/PixiViewport";

export function Stage(): ReactElement {
  const { width: imageWidth, height: imageHeight } = useAtomValue(imageAtom) ?? { width: 0, height: 0 };
  const [ref, { width: containerWidth, height: containerHeight }] = useElementSize();
  const imageUrl = useAtomValue(imageUrlAtom);
  const stageOptions = useAtomValue(stageOptionsAtom);
  const lock = useAtomValue(lockAtom);
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
          lock={lock}
        >
          <PixiSprite image={imageUrl} />
        </Viewport>
      </PixiStage>
    </div>
  );
}
