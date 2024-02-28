import type { IViewportOptions } from "pixi-viewport";
import { Viewport } from "pixi-viewport";
import type { Application, ICanvas } from "pixi.js";

// this is a custom class that extends pixi-viewport's Viewport class
// it's used to fix an issue with releasing the DOM element when the viewport is unmounted
export class ViewportExtended extends Viewport {
  public app: Application<ICanvas>;
  private renderedDOMElement?: HTMLElement;

  constructor(app: Application<ICanvas>, options: IViewportOptions) {
    super(options);
    this.app = app;
    this.lockDOMElement();
  }

  lockDOMElement(): this {
    this.renderedDOMElement = this.options.events.domElement;

    return this;
  }

  patchEvents(): void {
    if (this.renderedDOMElement) {
      this.options.events.domElement = this.renderedDOMElement;
    }
  }

  releaseDOMElement(): void {
    this.renderedDOMElement = undefined;
  }

  update(elapsed: number): void {
    super.update(elapsed);
  }
}
