import type { ReactElement } from "react";
import { HomePage } from "./HomePage";
import { ErrorView } from "~/components/views/ErrorView";

export function Component(): ReactElement {
  return <HomePage />;
}
Component.displayName = "HomePage";

export function ErrorBoundary(): ReactElement {
  return <ErrorView />;
}
