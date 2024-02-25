import type { ReactElement } from "react";
import { NotFoundView } from "~/components/views/not-found/NotFoundView";
import { useNotFoundView } from "~/components/views/not-found/UseNotFoundView";

export function NotFoundPage(): ReactElement {
  const notFoundViewProps = useNotFoundView();
  return <NotFoundView {...notFoundViewProps} />;
}
