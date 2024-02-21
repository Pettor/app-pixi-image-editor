import type { ReactElement } from "react";
import { Dropzone } from "../library/dropzone/Dropzone";
import { ThemeSwitch, type ThemeSwitchProps } from "../library/theme-controller/ThemeSwitch";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface HomeViewProps {
  themeSwitchProps: ThemeSwitchProps;
  onDrop: (acceptedFiles: File[]) => void;
}

export function HomeView({ themeSwitchProps, onDrop }: HomeViewProps): ReactElement {
  return (
    <BasicLayout container footer>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-1" />
        <div className="relative top-5 right-5 sm:top-10">
          <ThemeSwitch {...themeSwitchProps} />
        </div>
      </div>
      <div className="flex flex-1">
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
      </div>
    </BasicLayout>
  );
}
