import type { RefObject } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useOnClickOutside } from "usehooks-ts";
import { filterMenuStateAtom, toggleFilterMenuState } from "../atoms/tools/FilterMenuAtoms";

export function useFilterDrawer(drawerRef: RefObject<HTMLElement>): {
  drawerState: boolean;
  toggleDrawer: () => void;
} {
  const drawerState = useAtomValue(filterMenuStateAtom);
  const toggleDrawer = useSetAtom(toggleFilterMenuState);
  useOnClickOutside(drawerRef, () => drawerState && toggleDrawer());

  return {
    drawerState,
    toggleDrawer,
  };
}
