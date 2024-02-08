import { useCallback, type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { ImageEditor } from "~/components/ImageEditor";

export function App(): ReactElement {
  useDocumentTitle("LANDING PAGE");

  const handleShare = useCallback(() => {
    console.log("Share button clicked!");
  }, []);

  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <ImageEditor label="Hello World" onShare={handleShare} />
    </div>
  );
}
