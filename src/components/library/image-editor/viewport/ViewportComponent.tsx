import { type ReactNode } from "react";
import { PixiComponent, applyDefaultProps } from "@pixi/react";
import type { IViewportOptions } from "pixi-viewport";
import type * as PIXI from "pixi.js";
import { Ticker } from "pixi.js";
import { ViewportExtended } from "./ViewportExtended";

export interface ViewportComponentProps
  extends Pick<IViewportOptions, "ticker" | "screenWidth" | "screenHeight" | "worldWidth" | "worldHeight"> {
  ref: React.Ref<ViewportExtended>;
  app: PIXI.Application;
  worldWidth: number;
  worldHeight: number;
  lock: boolean;
  zoom: number;
  maxZoom?: number;
  minZoom?: number;
  onZoomed?: (zoom: number) => void;
  children: ReactNode;
}

const ticker = Ticker.shared;

export const ViewportComponent = PixiComponent<ViewportComponentProps, ViewportExtended>("Viewport", {
  create(props) {
    const { app, ...viewportProps } = props;
    const { worldWidth, worldHeight, onZoomed, maxZoom, minZoom } = viewportProps;

    const viewport = new ViewportExtended({
      ticker: ticker,
      events: app.renderer.events,
      ...viewportProps,
    });

    // activate plugins
    viewport.drag().pinch().wheel().decelerate();
    viewport.fit();
    viewport.moveCenter(worldWidth / 2, worldHeight / 2);

    if (maxZoom && minZoom) {
      viewport.clampZoom({
        maxScale: maxZoom / 100,
        minScale: minZoom / 100,
      });
    }

    if (onZoomed) {
      viewport.addListener("zoomed", () => onZoomed(viewport.scale.x));
    }

    return viewport;
  },
  applyProps: (instance, oldProps, newProps) => {
    if (oldProps.lock !== newProps.lock) {
      if (newProps.lock) {
        instance.clamp({
          direction: "all",
          underflow: "center",
        });
      } else {
        instance.plugins.remove("clamp");
      }
    }

    if (oldProps.zoom !== newProps.zoom) {
      instance.setZoom(newProps.zoom / 100, true);
    }

    applyDefaultProps(instance, oldProps, newProps);
  },
  willUnmount: (instance: ViewportExtended) => {
    instance.removeAllListeners();
    instance.patchEvents();
    instance.destroy({ children: true, texture: true, baseTexture: true });
    instance.releaseDOMElement();
    ticker.stop();
  },
});
