import { useAtomValue } from "jotai";
import { controlFilterAtom } from "../atoms/filters/FilterAtoms";

export function useStageFilters(): {
  blur: number;
  brightness: number;
  contrast: number;
  saturation: number;
  pixelate: number;
  red: number;
  green: number;
  blue: number;
} {
  const filters = useAtomValue(controlFilterAtom);

  return {
    ...filters,
  };
}
