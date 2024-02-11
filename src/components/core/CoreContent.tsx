import type { ReactElement } from "react";
import { StageComponent } from "../stage/StageComponent";
import { ToolbarTools } from "../toolbar/ToolbarTools";
import { ToolbarZoom } from "../toolbar/ToolbarZoom";

export function CoreContent(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col border-2 border-transparent">
      <ToolbarTools />
      <ToolbarZoom />
      <StageComponent />
    </div>
  );
}
