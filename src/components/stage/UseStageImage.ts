import { useAtomValue } from "jotai";
import { imageAtom, imageUrlAtom } from "../core/CoreAtoms";

export function useStageImage(): {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
} {
  const imageUrl = useAtomValue(imageUrlAtom);
  const { width: imageWidth, height: imageHeight } = useAtomValue(imageAtom) ?? { width: 0, height: 0 };

  return {
    imageUrl,
    imageWidth,
    imageHeight,
  };
}
