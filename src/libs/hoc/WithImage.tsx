import type { FC, ReactElement } from "react";
import { useEffect, useState } from "react";
import { loadImage } from "../functions/LoadImage";
import type { DistributiveOmit } from "../typescript/DistributiveOmit";

interface WithImageInjectedProps {
  image: HTMLImageElement;
}

export interface WithLoadedImageProps extends WithImageInjectedProps {
  url: string;
}

export function withImage<T extends WithLoadedImageProps>(
  Component: FC<T>,
  LoaderComponent: FC,
  ErrorComponent: FC
): FC<DistributiveOmit<T, keyof WithImageInjectedProps>> {
  function WithImage(props: DistributiveOmit<T, keyof WithImageInjectedProps>): ReactElement {
    const { url: imageUrl } = props;
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [failed, setFailed] = useState<boolean>(false);

    useEffect(() => {
      loadImage(imageUrl)
        .then((img) => {
          setImage(img);
        })
        .catch(() => {
          setFailed(true);
        });
    }, [imageUrl]);

    if (failed) {
      return <ErrorComponent key={`with-loaded-image__error`} />;
    }

    if (!image) {
      return <LoaderComponent key={`with-loaded-image__loading`} />;
    }

    return <Component key={imageUrl} {...(props as unknown as T)} image={image} />;
  }

  return WithImage;
}
