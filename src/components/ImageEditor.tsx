import type { ReactElement } from "react";
import { Provider } from "jotai/react";
import { HydrateAtoms } from "../libs/HydrateAtoms";
import { imageUrlAtom } from "./atoms/ImageAtom";
import { Stage } from "./Stage";
import { Toolbar } from "./Toolbar";

export interface ImageEditorProps {
  url: string;
}

export function ImageEditor({ url }: ImageEditorProps): ReactElement {
  return (
    <Provider>
      <HydrateAtoms atomValues={[[imageUrlAtom, url]]}>
        <div className="flex h-full w-full flex-col border-2 border-transparent ">
          <Toolbar />
          <Stage />
        </div>
      </HydrateAtoms>
    </Provider>
  );
}
