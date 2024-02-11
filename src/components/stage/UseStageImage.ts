import { useAtomValue } from "jotai";
import { imageAtom } from "../atoms/ImageAtoms";
import { imageUrlAtom } from "../atoms/ImageUrlAtoms";

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
