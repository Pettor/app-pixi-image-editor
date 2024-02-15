import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { EditorView } from "~/components/views/EditorView";

export function App(): ReactElement {
  useDocumentTitle("Image Editor");

  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <EditorView imageUrl="https://placekitten.com/500/700" />
    </div>
  );
}
