import type { ViewportExtended } from "~/components/library/editor/viewport/ViewportExtended";

export async function createImage(viewport: ViewportExtended): Promise<HTMLImageElement> {
  const app = viewport.app;

  const generatedImage = app.renderer.generateTexture(viewport, {
    region: app.screen,
    resolution: 2,
  });

  const image = app.renderer.plugins.extract.image(generatedImage, "image/png", 1.0);
  generatedImage.destroy();
  return image;
}
