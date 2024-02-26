import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { controlFilterAtom } from "../atoms/filters/FilterAtoms";
import { filterMenuStateAtom, toggleFilterMenuState } from "../atoms/menu/FilterMenuAtoms";
import type { FilterDrawerProps } from "./FilterDrawer";

export function useFilterDrawer(): FilterDrawerProps {
  const drawerState = useAtomValue(filterMenuStateAtom);
  const toggleDrawer = useSetAtom(toggleFilterMenuState);
  const [filterValues, setFilterValues] = useAtom(controlFilterAtom);

  return {
    open: drawerState,
    ...filterValues,
    onFilterChange: setFilterValues,
    onClose: toggleDrawer,
  };
}
