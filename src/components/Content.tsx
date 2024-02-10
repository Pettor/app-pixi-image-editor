import type { ReactElement } from "react";
import { Stage } from "./Stage";
import { Toolbar } from "./Toolbar";

export function Content(): ReactElement {
  return (
    <div className="flex h-full w-full flex-col border-2 border-transparent">
      <Toolbar />
      <Stage />
    </div>
  );
}
