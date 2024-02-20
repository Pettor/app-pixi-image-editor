import { useSetAtom } from "jotai";
import { toggleAppMenuState } from "../atoms/tools/AppMenuAtoms";

export function useToolbarMenu(): {
  toggleDrawer: () => void;
} {
  const toggleDrawer = useSetAtom(toggleAppMenuState);

  return {
    toggleDrawer,
  };
}
