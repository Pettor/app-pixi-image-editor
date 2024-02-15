import type { ReactElement } from "react";
import { ImageEditor } from "../library/image-editor/Editor";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface EditorViewProps {
  imageUrl: string;
}

export function EditorView({ imageUrl }: EditorViewProps): ReactElement {
  return (
    <BasicLayout>
      <ImageEditor url={imageUrl} />
    </BasicLayout>
  );
}
