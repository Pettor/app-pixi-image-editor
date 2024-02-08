import { useRef, type ReactElement } from "react";
import { Stage as PixiStage, Sprite as PixiSprite } from "@pixi/react";
import { useAtomValue } from "jotai/react";
import type { Viewport as PixiViewport } from "pixi-viewport";
import { useElementSize } from "usehooks-ts";
import { imageUrlAtom } from "./atoms/ImageAtom";
import { Viewport } from "./Viewport";

export function Stage(): ReactElement {
  const [ref, { width = 0, height = 0 }] = useElementSize();
  const viewportRef = useRef<PixiViewport>(null);
  const imageUrl = useAtomValue(imageUrlAtom);

  console.log("Stage", { width, height });

  return (
    <div ref={ref} className="flex-1 bg-amber-800">
      <PixiStage height={height} width={width}>
        <Viewport ref={viewportRef} screenHeight={height} screenWidth={width}>
          <PixiSprite image={imageUrl} x={0} y={0} />
        </Viewport>
      </PixiStage>
    </div>
  );
}
