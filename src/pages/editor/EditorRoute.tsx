import type { ReactElement } from "react";
import { useAtomValue } from "jotai";
import { EditorContext } from "./EditorContext";
import { EditorPage } from "./EditorPage";
import { ErrorView } from "~/components/views/error/ErrorView";
import { useErrorView } from "~/components/views/error/UseErrorView";
import { getDownloadUrlAtom } from "~/core/routes/atoms/DroppedFileAtoms";

export function Component(): ReactElement {
  const fileUrl = useAtomValue(getDownloadUrlAtom);
  const errorViewProps = useErrorView();

  if (!fileUrl) {
    return <ErrorView {...errorViewProps} message="File somehow went missing 🤔" />;
  }

  return (
    <EditorContext>
      <EditorPage url={fileUrl} />
    </EditorContext>
  );
}
Component.displayName = "EditorPage";

export function ErrorBoundary(): ReactElement {
  const errorViewProps = useErrorView();
  return <ErrorView {...errorViewProps} />;
}
