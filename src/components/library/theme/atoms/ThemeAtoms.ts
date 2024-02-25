import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { ThemeMode } from "../ThemeSwitcherClasses";

const themeLocalStorageAtom = atomWithStorage<ThemeMode>("theme", "light");
const themeMediaQueryAtom = atom(() => window.matchMedia("(prefers-color-scheme: dark)"));

// Derived
export const themeModeAtom = atom(
  (get) => {
    const mediaQuery = get(themeMediaQueryAtom);
    const localStorageTheme = get(themeLocalStorageAtom);

    if (!localStorageTheme) {
      return mediaQuery.matches ? "dark" : "light";
    }

    return localStorageTheme;
  },
  (get, set) => {
    const currentTheme = get(themeModeAtom);
    const newTheme = currentTheme === "light" ? "dark" : "light";

    set(themeLocalStorageAtom, newTheme);
  }
);
