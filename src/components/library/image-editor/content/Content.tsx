import type { ReactElement } from "react";
import type { AppDrawerProps } from "../drawer/AppDrawer";
import { AppDrawer } from "../drawer/AppDrawer";
import { StageComponent } from "../stage/StageComponent";
import { ToolbarMenu } from "../toolbar/ToolbarMenu";
import { ToolbarTools } from "../toolbar/ToolbarTools";
import { ToolbarZoom } from "../toolbar/ToolbarZoom";

export interface ContentProps {
  appdrawerProps: AppDrawerProps;
}

export function Content({ appdrawerProps }: ContentProps): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col">
      <AppDrawer {...appdrawerProps} />
      <ToolbarMenu />
      <ToolbarTools />
      <ToolbarZoom />
      <StageComponent />
    </div>
  );
}
