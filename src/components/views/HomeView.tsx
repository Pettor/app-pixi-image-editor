import type { ReactElement } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { Dropzone } from "../library/dropzone/Dropzone";
import { ThemeSwitch, type ThemeSwitchProps } from "../library/theme-controller/ThemeSwitch";
import LogoImageSrc from "~/assets/images/logo/Logo180.png";
import type { SocialLinkProps } from "~/components/layout/BasicLayout";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface HomeViewProps {
  themeSwitchProps: ThemeSwitchProps;
  socialLinkProps: SocialLinkProps;
  onDrop: (acceptedFiles: File[]) => void;
}

export function HomeView({ themeSwitchProps, socialLinkProps = {}, onDrop }: HomeViewProps): ReactElement {
  const { onGithubClick, onLinkedInClick } = socialLinkProps;

  return (
    <BasicLayout container footer {...socialLinkProps}>
      <div className="w-full flex items-center justify-center h-20 mt-4 px-4 lg:px-0 lg:mt-8">
        <div className="flex flex-1">
          <img className="w-14 h-14 lg:w-16 lg:h-16" src={LogoImageSrc} alt="Pixi Image Editor Logo" />
        </div>
        <div className="flex flex-row items-center h-8">
          <div className="z-20">
            <ThemeSwitch {...themeSwitchProps} />
          </div>
          <div className="divider divider-horizontal w-0" />
          <button
            className="btn btn-square btn-ghost p-2 fill-neutral dark:fill-neutral-content"
            onClick={onGithubClick}
          >
            <GithubIcon />
          </button>
          <button
            className="btn btn-square btn-ghost p-2 fill-neutral dark:fill-neutral-content"
            onClick={onLinkedInClick}
          >
            <LinkedInIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="flex flex-1 flex-row justify-center items-center">
              <h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text p-2 text-5xl font-bold text-transparent md:text-5xl lg:text-7xl">
                Pixi Image Editor
              </h1>
            </div>
            <p className="py-6 text-lg lg:text-xl">
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
