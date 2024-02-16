import type { ReactElement } from "react";
import { useAtomValue } from "jotai";
import { ImageEditorPage } from "./ImageEditorPage";
import { ErrorView } from "~/components/views/ErrorView";
import { downloadUrlAtom } from "~/core/routes/atoms/DroppedFileAtoms";

export function Component(): ReactElement {
  const fileUrl = useAtomValue(downloadUrlAtom);

  if (!fileUrl) {
    return <ErrorView />;
  }

  return <ImageEditorPage url={fileUrl} />;
}
Component.displayName = "ImageEditorPage";

export function ErrorBoundary(): ReactElement {
  return <ErrorView />;
}
