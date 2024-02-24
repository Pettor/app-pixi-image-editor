import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { ImageEditor } from "~/components/library/image-editor/Editor";
import { useThemeSwitcher } from "~/components/library/theme-controller/UseThemeSwitcher";
import { ErrorView } from "~/components/views/error/ErrorView";
import { LoadingView } from "~/components/views/loading/LoadingView";

export interface ImageEditorPageProps {
  url: string;
}

export function ImageEditorPage({ url }: ImageEditorPageProps): ReactElement {
  const navigate = useNavigate();
  const themeSwitchProps = useThemeSwitcher();

  function handleOnNewImage(): void {
    navigate(`/`);
  }

  return (
    <ImageEditor
      url={url}
      appdrawerProps={{
        onNewImage: handleOnNewImage,
        themeSwitchProps,
      }}
      LoaderComponent={() => <LoadingView />}
      ErrorComponent={() => <ErrorView />}
    />
  );
}
