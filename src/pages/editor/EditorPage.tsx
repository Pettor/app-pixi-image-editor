import type { ReactElement } from "react";
import { useEditorPage } from "./UseEditorPage";
import { ImageEditor } from "~/components/library/editor/Editor";
import { ErrorView } from "~/components/views/error/ErrorView";
import { LoadingView } from "~/components/views/loading/LoadingView";

export interface EditorPageProps {
  url: string;
}

export function EditorPage({ url }: EditorPageProps): ReactElement {
  const appDrawerProps = useEditorPage();

  return (
    <ImageEditor
      url={url}
      appdrawerProps={appDrawerProps}
      LoaderComponent={() => <LoadingView />}
      ErrorComponent={() => <ErrorView onBack={() => console.log("onBack")} />}
    />
  );
}
