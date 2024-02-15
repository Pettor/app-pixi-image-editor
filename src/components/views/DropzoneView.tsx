import type { ReactElement } from "react";
import { Dropzone } from "../library/dropzone/Dropzone";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface DropzoneViewProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export function DropzoneView({ onDrop }: DropzoneViewProps): ReactElement {
  return (
    <BasicLayout container>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Pixi Image Editor</h1>
          <p className="py-6">
            This is a image editor built using <b>PixiJS</b> and React. You can upload an image to get started.
          </p>
          <div className="flex h-full w-full items-center justify-center">
            <Dropzone onDrop={onDrop} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
