import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { ImageEditor } from "~/components/library/image-editor/Editor";
import { ErrorView } from "~/components/views/ErrorView";
import { LoadingView } from "~/components/views/LoadingView";

export interface ImageEditorPageProps {
  url: string;
}

export function ImageEditorPage({ url }: ImageEditorPageProps): ReactElement {
  const navigate = useNavigate();

  function handleOnNewImage(): void {
    navigate(`/`);
  }

  return (
    <ImageEditor
      url={url}
      appdrawerProps={{
        onNewImage: handleOnNewImage,
      }}
      LoaderComponent={() => <LoadingView />}
      ErrorComponent={() => <ErrorView />}
    />
  );
}
