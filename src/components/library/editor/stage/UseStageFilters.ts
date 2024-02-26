import { useAtomValue } from "jotai";
import { controlFilterAtom } from "../atoms/filters/FilterAtoms";

export function useStageFilters(): {
  blur: number;
  brightness: number;
  contrast: number;
  saturation: number;
} {
  const { blur, brightness, contrast, saturation } = useAtomValue(controlFilterAtom);

  return {
    blur,
    brightness,
    contrast,
    saturation,
  };
}
