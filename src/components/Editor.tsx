import type { ReactElement } from "react";
import { Provider } from "jotai/react";
import { HydrateAtoms } from "../libs/react/HydrateAtoms";
import { imageAtom, imageUrlAtom } from "./core/CoreAtoms";
import { CoreContent } from "./core/CoreContent";
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
          <CoreContent />
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
