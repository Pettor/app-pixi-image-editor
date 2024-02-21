import type { ReactElement } from "react";
import { redirect } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { ErrorView } from "~/components/views/ErrorView";

export function loader(): Response {
  // For now redirect to root
  return redirect("/");
}

export function Component(): ReactElement {
  return <NotFoundPage />;
}
Component.displayName = "NotFoundPage";

export function ErrorBoundary(): ReactElement {
  return <ErrorView />;
}
