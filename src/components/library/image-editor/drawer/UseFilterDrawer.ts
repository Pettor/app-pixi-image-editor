import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { blurFilterAtom } from "../atoms/filters/BlurFilterAtom";
import { filterMenuStateAtom, toggleFilterMenuState } from "../atoms/tools/FilterMenuAtoms";
import type { FilterDrawerProps } from "./FilterDrawer";

export function useFilterDrawer(): Pick<FilterDrawerProps, "onClose" | "open" | "blur" | "onBlurChange"> {
  const drawerState = useAtomValue(filterMenuStateAtom);
  const toggleDrawer = useSetAtom(toggleFilterMenuState);
  const [blur, setBlur] = useAtom(blurFilterAtom);

  return {
    open: drawerState,
    onClose: toggleDrawer,
    blur,
    onBlurChange: setBlur,
  };
}
