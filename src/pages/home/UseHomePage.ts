import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { useThemeSwitcher } from "~/components/library/theme-controller/UseThemeSwitcher";
import type { HomeViewProps } from "~/components/views/home/HomeView";
import { droppedFileAtom } from "~/core/routes/atoms/DroppedFileAtoms";

export function useHomePage(): HomeViewProps {
  const navigate = useNavigate();
  const setDroppedFile = useSetAtom(droppedFileAtom);
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

  return {
    socialLinkProps: {
      onGithubClick: () =>
        window.open("https://github.com/Pettor/component-pixi-image-editor", "_blank", "noopener noreferrer"),
      onLinkedInClick: () =>
        window.open("https://www.linkedin.com/in/petter-hancock/", "_blank", "noopener noreferrer"),
    },
    onDrop: handleOnDrop,
    themeSwitchProps,
  };
}
