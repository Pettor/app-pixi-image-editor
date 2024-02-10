export function loadImage(imageUrl: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = (): void => resolve(image);
    image.onerror = reject;
    image.src = imageUrl;
  });
}
