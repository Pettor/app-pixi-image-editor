import type { ReactElement } from "react";
import { StageComponent } from "../stage/StageComponent";
import { ToolbarMenu } from "../toolbar/ToolbarMenu";
import { ToolbarTools } from "../toolbar/ToolbarTools";
import { ToolbarZoom } from "../toolbar/ToolbarZoom";

export function Content(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col">
      <ToolbarMenu />
      <ToolbarTools />
      <ToolbarZoom />
      <StageComponent />
    </div>
  );
}
