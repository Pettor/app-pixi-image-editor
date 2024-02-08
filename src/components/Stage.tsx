import type { ReactElement } from "react";
import { useAtomValue } from "jotai/react";
import { imageUrlAtom } from "./atoms/ImageAtom";
import { Stage } from "@pixi/react";

export function Stage(): ReactElement {
  const imageUrl = useAtomValue(imageUrlAtom);
  console.log(imageUrl);

  return (
    <Stage>
      <Sprite>
    </Stage>
  );
}
