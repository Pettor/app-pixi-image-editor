import { useAtomValue } from "jotai";
import { blurFilterAtom } from "../atoms/filters/BlurFilterAtom";

export function useStageFilters(): {
  blur: number;
} {
  const blur = useAtomValue(blurFilterAtom);
  return {
    blur,
  };
}
