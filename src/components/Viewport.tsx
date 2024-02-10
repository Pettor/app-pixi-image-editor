import { forwardRef, type ReactNode } from "react";
import { PixiComponent, useApp } from "@pixi/react";
import type { IViewportOptions } from "pixi-viewport";
import { Viewport as PixiViewport } from "pixi-viewport";
import type * as PIXI from "pixi.js";
import { Ticker } from "pixi.js";

interface PixiViewComponentProps
  extends Pick<IViewportOptions, "ticker" | "screenWidth" | "screenHeight" | "worldWidth" | "worldHeight"> {
  ref: React.Ref<PixiViewport>;
  app: PIXI.Application;
  worldWidth: number;
  worldHeight: number;
  children: ReactNode;
}

export interface ViewportProps extends Omit<PixiViewComponentProps, "app" | "ref"> {}

// create and instantiate the viewport component
// we share the ticker and interaction from app
export const PixiViewportComponent = PixiComponent<PixiViewComponentProps, PixiViewport>("Viewport", {
  create(props) {
    const { app, ...viewportProps } = props;
    const { worldWidth, worldHeight } = viewportProps;

    const viewport = new PixiViewport({
      ticker: Ticker.shared,
      events: app.renderer.events,
      ...viewportProps,
    });

    // activate plugins
    viewport.drag().pinch().wheel().decelerate().clamp({
      left: false,
      right: false,
      top: false,
      bottom: false,
      direction: "all",
      underflow: "center",
    });

    viewport.fit();
    if (worldWidth && worldHeight) {
      viewport.moveCenter(worldWidth / 2, worldHeight / 2);
    }

    return viewport;
  },
});

export const Viewport = forwardRef<PixiViewport, ViewportProps>((props, ref) => {
  const app = useApp();

  return <PixiViewportComponent ref={ref} app={app} {...props} />;
});

Viewport.displayName = "Viewport";
