import type { ReactElement } from "react";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface DropzoneViewProps {
  onDrop: (files: File[]) => void;
}

export function DropzoneView(): ReactElement {
  return (
    <BasicLayout>
      <h1>Home</h1>
      <span>Attach file here</span>
    </BasicLayout>
  );
}
