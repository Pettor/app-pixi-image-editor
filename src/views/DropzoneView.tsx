import type { ReactElement } from "react";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface DropzoneViewProps {
  onDrop: (files: File[]) => void;
}

export function DropzoneView(): ReactElement {
  return (
    <BasicLayout container>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1>Home</h1>
        <span>Attach file here</span>
      </div>
    </BasicLayout>
  );
}
