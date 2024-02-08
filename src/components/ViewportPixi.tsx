import type { ReactNode } from "react";
import { PixiComponent } from "@pixi/react";
import type { IViewportOptions } from "pixi-viewport";
import { Viewport } from "pixi-viewport";
import type * as PIXI from "pixi.js";
import { Ticker } from "pixi.js";

export interface PixiViewComponentProps
  extends Pick<IViewportOptions, "ticker" | "screenWidth" | "screenHeight" | "worldWidth" | "worldHeight"> {
  ref: React.Ref<Viewport>;
  app: PIXI.Application;
  children: ReactNode;
}

const WIDTH = 1000;
const HEIGHT = 667;

// create and instantiate the viewport component
// we share the ticker and interaction from app
export const ViewportPixi = PixiComponent<PixiViewComponentProps, Viewport>("Viewport", {
  create(props) {
    const { app, ...viewportProps } = props;
    const { screenHeight, screenWidth } = viewportProps;

    const viewport = new Viewport({
      ticker: Ticker.shared,
      events: app.renderer.events,
      worldWidth: WIDTH,
      worldHeight: HEIGHT,
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
    if (screenHeight && screenWidth) {
      viewport.moveCenter(WIDTH / 2, HEIGHT / 2);
    }

    return viewport;
  },
});
