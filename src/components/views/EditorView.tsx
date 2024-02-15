import type { ComponentProps, ReactElement } from "react";
import { ImageEditor } from "../library/image-editor/Editor";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface EditorViewProps extends ComponentProps<typeof ImageEditor> {}

export function EditorView(props: EditorViewProps): ReactElement {
  return (
    <BasicLayout>
      <ImageEditor {...props} />
    </BasicLayout>
  );
}
