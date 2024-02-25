import type { ReactElement } from "react";
import { useAtomValue } from "jotai";
import { ImageEditorPage } from "./ImageEditorPage";
import { ErrorView } from "~/components/views/error/ErrorView";
import { getDownloadUrlAtom } from "~/core/routes/atoms/DroppedFileAtoms";

export function Component(): ReactElement {
  const fileUrl = useAtomValue(getDownloadUrlAtom);

  if (!fileUrl) {
    return <ErrorView />;
  }

  return <ImageEditorPage url={fileUrl} />;
}
Component.displayName = "ImageEditorPage";

export function ErrorBoundary(): ReactElement {
  return <ErrorView />;
}
