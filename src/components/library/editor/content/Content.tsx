import type { ReactElement } from "react";
import type { AppDrawerProps } from "../drawer/AppDrawer";
import { AppDrawer } from "../drawer/AppDrawer";
import { FilterDrawer } from "../drawer/FilterDrawer";
import { useAppDrawer } from "../drawer/UseAppDrawer";
import { useFilterDrawer } from "../drawer/UseFilterDrawer";
import { StageComponent } from "../stage/StageComponent";
import { ToolbarMenu } from "../toolbar/ToolbarMenu";
import { ToolbarTools } from "../toolbar/ToolbarTools";
import { ToolbarZoom } from "../toolbar/ToolbarZoom";

export interface ContentProps {
  appdrawerProps: Omit<AppDrawerProps, "open" | "onClose">;
}

export function Content({ appdrawerProps }: ContentProps): ReactElement {
  const filterDrawerInternalProps = useFilterDrawer();
  const appDrawerInternalProps = useAppDrawer();

  return (
    <div className="relative flex h-full w-full flex-col">
      <AppDrawer {...appdrawerProps} {...appDrawerInternalProps} />
      <FilterDrawer {...filterDrawerInternalProps} />
      <ToolbarMenu />
      <ToolbarTools />
      <ToolbarZoom />
      <StageComponent />
    </div>
  );
}
