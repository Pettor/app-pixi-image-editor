import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { viewportAtom } from "~/components/library/editor/atoms/viewport/ViewportAtoms";
import type { AppDrawerProps } from "~/components/library/editor/drawer/AppDrawer";
import { useThemeSwitcher } from "~/components/library/theme/UseThemeSwitcher";
import { createImage } from "~/libs/functions/CreateImage";

export function useEditorPage(): Omit<AppDrawerProps, "onClose" | "open"> {
  const navigate = useNavigate();
  const themeSwitchProps = useThemeSwitcher();
  const viewport = useAtomValue(viewportAtom);

  function handleOnNewImage(): void {
    navigate(`/`);
  }

  async function handleOnSaveImage(): Promise<void> {
    if (!viewport) {
      console.error("Viewport is not available");
      return;
    }

    const imagesrc = await createImage(viewport);
    const createEl = document.createElement("a");

    createEl.href = imagesrc.src;
    createEl.download = "image.png";
    createEl.click();
    createEl.remove();
  }

  return {
    onNewImage: handleOnNewImage,
    onSaveImage: handleOnSaveImage,
    themeSwitchProps,
  };
}
