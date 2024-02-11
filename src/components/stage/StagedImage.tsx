import type { ReactElement } from "react";
import { Sprite as PixiSprite } from "@pixi/react";

export interface StagedImageProps {
  imageUrl: string;
}

export function StagedImage({ imageUrl }: StagedImageProps): ReactElement {
  return <PixiSprite image={imageUrl} />;
}
