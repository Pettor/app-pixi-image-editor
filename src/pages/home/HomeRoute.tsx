import type { ReactElement } from "react";
import { HomePage } from "./HomePage";
import { ErrorView } from "~/components/views/error/ErrorView";
import { useErrorView } from "~/components/views/error/UseErrorView";

export function Component(): ReactElement {
  return <HomePage />;
}
Component.displayName = "HomePage";

export function ErrorBoundary(): ReactElement {
  const errorViewProps = useErrorView();
  return <ErrorView {...errorViewProps} />;
}
