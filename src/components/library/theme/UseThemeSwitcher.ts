import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeModeAtom } from "./atoms/ThemeAtoms";
import type { ThemeSwitchProps } from "./ThemeSwitch";

export function useThemeSwitcher(): ThemeSwitchProps {
  const [themeMode, toggleTheme] = useAtom(themeModeAtom);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  }, [themeMode]);

  function setTheme(): void {
    toggleTheme();
  }

  return {
    mode: themeMode,
    onSwitch: setTheme,
  };
}
