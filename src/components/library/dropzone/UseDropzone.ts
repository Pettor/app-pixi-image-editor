import { useDropzone as useReactDropzone } from "react-dropzone";

export function useDropzone(onDrop: (acceptedFiles: File[]) => void): {
  getRootProps: (props?: Record<string, unknown>) => Record<string, unknown>;
  getInputProps: (props?: Record<string, unknown>) => Record<string, unknown>;
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
  getBackgroundClass: () => string;
} {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useReactDropzone({
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

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    getBackgroundClass,
  };
}
