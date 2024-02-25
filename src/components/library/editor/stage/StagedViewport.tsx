import { forwardRef } from "react";
import { useApp } from "@pixi/react";
import type { ViewportComponentProps } from "../viewport/ViewportComponent";
import { ViewportComponent } from "../viewport/ViewportComponent";
import type { ViewportExtended } from "../viewport/ViewportExtended";

export interface ViewportProps extends Omit<ViewportComponentProps, "app" | "ref"> {}

export const StagedViewport = forwardRef<ViewportExtended, ViewportProps>((props, ref) => {
  const app = useApp();

  return <ViewportComponent ref={ref} app={app} {...props} />;
});

StagedViewport.displayName = "StagedViewport";
