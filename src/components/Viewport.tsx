import { forwardRef } from "react";
import { useApp } from "@pixi/react";
import type { Viewport as PixiViewport } from "pixi-viewport";
import { ViewportPixi, type PixiViewComponentProps } from "./ViewportPixi";

export interface ViewportProps extends Omit<PixiViewComponentProps, "app" | "ref"> {}

export const Viewport = forwardRef<PixiViewport, ViewportProps>((props, ref) => {
  const app = useApp();

  return <ViewportPixi ref={ref} app={app} {...props} />;
});

Viewport.displayName = "Viewport";
