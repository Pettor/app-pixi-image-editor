import type { ReactElement } from "react";
import { Provider } from "jotai/react";
import { imageAtom } from "./atoms/ImageAtoms";
import { imageUrlAtom } from "./atoms/ImageUrlAtoms";
import type { ContentProps } from "./content/Content";
import { Content } from "./content/Content";
import type { WithImageProps } from "~/libs/hoc/WithImage";
import { withImage } from "~/libs/hoc/WithImage";
import ErrorBoundary from "~/libs/react/ErrorBoundary";
import { HydrateAtoms } from "~/libs/react/HydrateAtoms";

export interface ImageEditorProps extends ContentProps {
  url: string;
}

interface ImageEditorWithImageProps extends ImageEditorProps, WithImageProps {}

function Editor({ url, image, ...contentProps }: ImageEditorWithImageProps): ReactElement {
  return (
    <ErrorBoundary fallback={<h1>Internal error</h1>}>
      <Provider>
        <HydrateAtoms
          atomValues={[
            [imageUrlAtom, url],
            [imageAtom, image],
          ]}
        >
          <Content {...contentProps} />
        </HydrateAtoms>
      </Provider>
    </ErrorBoundary>
  );
}

const editorWithImage = withImage(Editor);

export { editorWithImage as ImageEditor };
