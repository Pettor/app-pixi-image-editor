import type { ReactElement } from "react";
import { Dropzone } from "../library/dropzone/Dropzone";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface HomeViewProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export function HomeView({ onDrop }: HomeViewProps): ReactElement {
  return (
    <BasicLayout container footer>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text p-2 text-3xl font-bold text-transparent md:text-5xl lg:text-7xl">
            Pixi Image Editor
          </h1>
          <p className="py-6">
            This is a image editor built using <b className="text-secondary">PixiJS</b> and React. You can upload an
            image to get started.
          </p>
          <div className="flex h-full w-full items-center justify-center">
            <Dropzone onDrop={onDrop} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
