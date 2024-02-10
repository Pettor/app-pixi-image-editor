import type { IViewportOptions } from "pixi-viewport";
import { Viewport } from "pixi-viewport";

// this is a custom class that extends pixi-viewport's Viewport class
// it's used to fix an issue with releasing the DOM element when the viewport is unmounted
export class PixiViewport extends Viewport {
  private renderedDOMElement?: HTMLElement;

  constructor(options: IViewportOptions) {
    super(options);

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
