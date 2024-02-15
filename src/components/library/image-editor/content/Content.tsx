import type { ReactElement } from "react";
import { StageComponent } from "../stage/StageComponent";
import type { ToolbarMenuProps } from "../toolbar/ToolbarMenu";
import { ToolbarMenu } from "../toolbar/ToolbarMenu";
import { ToolbarTools } from "../toolbar/ToolbarTools";
import { ToolbarZoom } from "../toolbar/ToolbarZoom";

export interface ContentProps {
  toolbarMenuProps: ToolbarMenuProps;
}

export function Content({ toolbarMenuProps }: ContentProps): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col">
      <ToolbarMenu {...toolbarMenuProps} />
      <ToolbarTools />
      <ToolbarZoom />
      <StageComponent />
    </div>
  );
}
