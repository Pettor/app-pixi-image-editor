import { useAtomValue, useSetAtom } from "jotai";
import { appMenuStateAtom, toggleAppMenuState } from "../atoms/tools/AppMenuAtoms";
import type { AppDrawerProps } from "./AppDrawer";

export function useAppDrawer(): Pick<AppDrawerProps, "open" | "onClose"> {
  const drawerState = useAtomValue(appMenuStateAtom);
  const toggleDrawer = useSetAtom(toggleAppMenuState);

  return {
    open: drawerState,
    onClose: () => drawerState && toggleDrawer(),
  };
}
