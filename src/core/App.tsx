import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { AppProviders } from "./AppProviders";
import { AppRoutes } from "./routes/AppRoutes";

export function App(): ReactElement {
  useDocumentTitle("Pixi Image Editor");

  return (
    <div className="flex h-svh w-svw">
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </div>
  );
}
