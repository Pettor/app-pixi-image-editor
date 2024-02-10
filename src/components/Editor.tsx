import type { ReactElement } from "react";
import { Provider } from "jotai/react";
import { imageAtom, imageUrlAtom } from "../libs/atoms/ImageAtom";
import { HydrateAtoms } from "../libs/react/jotai/HydrateAtoms";
import { Content } from "./Content";
import type { WithLoadedImageProps } from "~/libs/hoc/WithImage";
import { withImage } from "~/libs/hoc/WithImage";
import ErrorBoundary from "~/libs/react/ErrorBoundary";

export interface ImageEditorProps {
  url: string;
}

interface ImageEditorWithLoadedImageProps extends ImageEditorProps, WithLoadedImageProps {}

function Editor({ url, image }: ImageEditorWithLoadedImageProps): ReactElement {
  return (
    <ErrorBoundary fallback={<h1>Internal error</h1>}>
      <Provider>
        <HydrateAtoms
          atomValues={[
            [imageUrlAtom, url],
            [imageAtom, image],
          ]}
        >
          <Content />
        </HydrateAtoms>
      </Provider>
    </ErrorBoundary>
  );
}

const editorWithImage = withImage(
  Editor,
  () => <div>Loading</div>,
  () => <div>Failed to load image</div>
);

export { editorWithImage as ImageEditor };
