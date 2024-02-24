import type { ReactElement } from "react";
import { BasicLayout } from "../../layout/BasicLayout";

export interface ErrorViewProps {
  message?: string;
}

export function ErrorView({ message }: ErrorViewProps): ReactElement {
  return (
    <BasicLayout>
      <h1>{message ?? "Something went wrong"}</h1>
    </BasicLayout>
  );
}
