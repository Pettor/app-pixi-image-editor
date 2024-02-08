import type { ReactElement } from "react";
import { Provider } from "jotai/react";
import { HydrateAtoms } from "../libs/HydrateAtoms";
import { imageUrlAtom } from "./atoms/ImageAtom";
import { Stage } from "./Stage";

export interface ImageEditorProps {
  url: string;
}

export function ImageEditor({ url }: ImageEditorProps): ReactElement {
  return (
    <Provider>
      <HydrateAtoms atomValues={[[imageUrlAtom, url]]}>
        <Stage />
      </HydrateAtoms>
    </Provider>
  );
}
