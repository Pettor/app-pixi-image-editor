import { useEffect, useLayoutEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import type { ThemeSwitchProps } from "./ThemeSwitch";
import type { ThemeMode } from "./ThemeSwitcherClasses";

export function useThemeSwitcher(): ThemeSwitchProps {
  const [mediaQuery] = useState(() => window.matchMedia("(prefers-color-scheme: dark)"));
  const [themeLocalStorage, setThemeLocalStorage] = useLocalStorage<ThemeMode>("theme", () => {
    if (mediaQuery.matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useLayoutEffect(() => {
    if (themeLocalStorage) {
      return;
    }

    if (mediaQuery.matches) {
      setThemeLocalStorage("dark");
    } else {
      setThemeLocalStorage("light");
    }
  }, [mediaQuery, setThemeLocalStorage, themeLocalStorage]);

  useEffect(() => {
    if (themeLocalStorage === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  }, [themeLocalStorage]);

  function setTheme(): void {
    setThemeLocalStorage((theme) => (theme === "light" ? "dark" : "light"));
  }

  return {
    mode: themeLocalStorage,
    onSwitch: setTheme,
  };
}
