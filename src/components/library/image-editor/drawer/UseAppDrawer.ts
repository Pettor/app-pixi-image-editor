import type { RefObject } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useOnClickOutside } from "usehooks-ts";
import { appMenuStateAtom, toggleAppMenuState } from "../atoms/tools/AppMenuAtoms";

export function useAppDrawer(menuRef: RefObject<HTMLElement>): {
  drawerState: boolean;
} {
  const drawerState = useAtomValue(appMenuStateAtom);
  const toggleDrawer = useSetAtom(toggleAppMenuState);
  useOnClickOutside(menuRef, () => drawerState && toggleDrawer());

  return {
    drawerState,
  };
}
