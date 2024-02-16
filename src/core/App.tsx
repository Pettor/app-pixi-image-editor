import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { AppRoutes } from "./routes/AppRoutes";

export function App(): ReactElement {
  useDocumentTitle("Image Editor");

  return (
    <div className="flex h-svh w-svw">
      <AppRoutes />
    </div>
  );
}
