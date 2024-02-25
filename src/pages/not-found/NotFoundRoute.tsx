import type { ReactElement } from "react";
import { NotFoundPage } from "./NotFoundPage";
import { ErrorView } from "~/components/views/error/ErrorView";
import { useErrorView } from "~/components/views/error/UseErrorView";

export function Component(): ReactElement {
  return <NotFoundPage />;
}
Component.displayName = "NotFoundPage";

export function ErrorBoundary(): ReactElement {
  const errorViewProps = useErrorView();
  return <ErrorView {...errorViewProps} />;
}
