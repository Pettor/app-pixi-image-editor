import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useHomePage } from "./UseHomePage";
import { useThemeSwitcher } from "~/components/library/theme-controller/UseThemeSwitcher";
import { HomeView } from "~/components/views/HomeView";

export function HomePage(): ReactElement {
  const navigate = useNavigate();
  const { setDroppedFile } = useHomePage();
  const themeSwitchProps = useThemeSwitcher();

  function handleOnDrop(acceptedFiles: File[]): void {
    if (acceptedFiles.length > 1 || acceptedFiles.length === 0) {
      console.error("Can only handle one file at a time");
      return;
    }

    const file = acceptedFiles[0];
    if (!file) {
      console.error("No file found");
      return;
    }

    setDroppedFile(file);
    navigate(`/editor`);
  }

  return <HomeView onDrop={handleOnDrop} themeSwitchProps={themeSwitchProps} />;
}
