import type { ReactElement } from "react";
import { Sprite as PixiSprite } from "@pixi/react";
import type { IPointData } from "pixi.js";

export interface StagedImageProps {
  imageUrl: string;
  scale: IPointData;
  rotation: number;
  imageWidth: number;
  imageHeight: number;
}

export function StagedImage({ imageUrl, imageWidth, imageHeight, scale, rotation }: StagedImageProps): ReactElement {
  return (
    <PixiSprite
      anchor={0.5}
      image={imageUrl}
      scale={scale}
      rotation={rotation}
      position={{
        x: imageWidth / 2,
        y: imageHeight / 2,
      }}
    />
  );
}
