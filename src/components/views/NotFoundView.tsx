import type { ReactElement } from "react";
import { BasicLayout } from "../layout/BasicLayout";

export function NotFoundView(): ReactElement {
  return (
    <BasicLayout container>
      <h1>Not Found</h1>
    </BasicLayout>
  );
}
