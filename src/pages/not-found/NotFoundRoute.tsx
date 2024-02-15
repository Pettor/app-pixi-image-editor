import type { ReactElement } from "react";
import { NotFoundPage } from "./NotFoundPage";
import { ErrorView } from "~/components/views/ErrorView";

export function Component(): ReactElement {
  return <NotFoundPage />;
}
Component.displayName = "NotFoundPage";

export function ErrorBoundary(): ReactElement {
  return <ErrorView />;
}
