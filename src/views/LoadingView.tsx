import type { ReactElement } from "react";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface LoadingViewProps {
  onDrop: (files: File[]) => void;
}

export function LoadingView(): ReactElement {
  return (
    <BasicLayout>
      <div className="flex h-screen w-full items-center justify-center">
        <span className="loading loading-ring loading-lg" />
      </div>
    </BasicLayout>
  );
}
