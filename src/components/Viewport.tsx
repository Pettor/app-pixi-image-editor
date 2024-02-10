import { forwardRef, type ReactNode } from "react";
import { PixiComponent, useApp } from "@pixi/react";
import type { IViewportOptions } from "pixi-viewport";
import type * as PIXI from "pixi.js";
import { Ticker } from "pixi.js";
import { PixiViewport } from "~/libs/react/pixi/PixiViewport";

interface PixiViewComponentProps
  extends Pick<IViewportOptions, "ticker" | "screenWidth" | "screenHeight" | "worldWidth" | "worldHeight"> {
  ref: React.Ref<PixiViewport>;
  app: PIXI.Application;
  worldWidth: number;
  worldHeight: number;
  children: ReactNode;
}

export interface ViewportProps extends Omit<PixiViewComponentProps, "app" | "ref"> {}

const ticker = Ticker.shared;

export const PixiViewportComponent = PixiComponent<PixiViewComponentProps, PixiViewport>("Viewport", {
  create(props) {
    const { app, ...viewportProps } = props;
    const { worldWidth, worldHeight } = viewportProps;

    const viewport = new PixiViewport({
      ticker: ticker,
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
    viewport.moveCenter(worldWidth / 2, worldHeight / 2);

    return viewport;
  },
  willUnmount: (instance: PixiViewport) => {
    instance.patchEvents();
    instance.destroy({ children: true, texture: true, baseTexture: true });
    instance.releaseDOMElement();
    ticker.stop();
  },
});

export const Viewport = forwardRef<PixiViewport, ViewportProps>((props, ref) => {
  const app = useApp();

  return <PixiViewportComponent ref={ref} app={app} {...props} />;
});

Viewport.displayName = "Viewport";
