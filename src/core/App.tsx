import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { ImageEditor } from "~/components/Editor";

export function App(): ReactElement {
  useDocumentTitle("Image Editor");

  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <ImageEditor url="https://placekitten.com/500/700" />
    </div>
  );
}
