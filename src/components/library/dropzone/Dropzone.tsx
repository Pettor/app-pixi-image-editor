import type { ReactElement } from "react";
import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";

export interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export function Dropzone({ onDrop }: DropzoneProps): ReactElement {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
  });

  function getBackgroundClass(): string {
    if (isDragAccept) return "bg-success dark:text-black";
    if (isDragReject) return "bg-error dark:text-black";
    if (isDragActive) return "bg-base-300";
    return "bg-base-200";
  }

  return (
    <div className="m-2 flex w-full max-w-screen-sm items-center justify-center">
      <div {...getRootProps({ className: "w-full h-full" })}>
        <label
          htmlFor="dropzone-file"
          className={clsx(
            "flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral transition-all hover:bg-base-300",
            getBackgroundClass()
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center">
            <DocumentArrowUpIcon className="mb-4 h-8 w-8" />
            <p className="mb-2">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
