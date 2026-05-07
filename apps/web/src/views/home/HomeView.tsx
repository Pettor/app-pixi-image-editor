import type { ReactElement } from "react";
import { AdjustmentsHorizontalIcon, ArrowsPointingOutIcon, PhotoIcon } from "@heroicons/react/24/outline";
import type { SocialLinkProps } from "@package/ui";
import { FullscreenLayout } from "@package/ui";
import { useIntl } from "react-intl";
import { HomePageHeader } from "./HomePageHeader";
import LogoImageSrc from "~/assets/logo/template-512x512.svg";
import type { ThemeSwitchProps } from "~/components/actions/theme-switch/ThemeSwitch";
import { Dropzone } from "~/components/input/dropzone/Dropzone";

export interface HomeViewProps {
  themeSwitchProps: ThemeSwitchProps;
  socialLinkProps: SocialLinkProps;
  onDrop: (acceptedFiles: File[]) => void;
}

export function HomeView({ themeSwitchProps, socialLinkProps = {}, onDrop }: HomeViewProps): ReactElement {
  const intl = useIntl();

  return (
    <FullscreenLayout footer className="home-bg" {...socialLinkProps}>
      <HomePageHeader themeSwitchProps={themeSwitchProps} />
      <div className="hero flex-1">
        <div className="hero-content flex-col gap-6 py-10 text-center">
          <figure className="hover-3d">
            <img
              className="h-24 w-24 lg:h-28 lg:w-28"
              src={LogoImageSrc}
              alt={intl.formatMessage({
                description: "HomeView - logo alt text",
                defaultMessage: "Pixi Image Editor Logo",
                id: "o16sVD",
              })}
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <div className="max-w-2xl">
            <h1 className="from-primary to-secondary inline-block bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:p-2 lg:text-7xl">
              {intl.formatMessage({
                description: "HomeView - main heading",
                defaultMessage: "Pixi Image Editor",
                id: "Dastjz",
              })}
            </h1>
            <p className="text-base-content/70 py-4 text-base lg:py-6 lg:text-lg">
              {intl.formatMessage(
                {
                  description: "HomeView - subtitle description",
                  defaultMessage:
                    "This is a image editor built using <b>PixiJS</b> and React. You can upload an image to get started.",
                  id: "4NvSlM",
                },
                {
                  b: (chunks) => <b className="text-secondary">{chunks}</b>,
                }
              )}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="badge badge-soft badge-primary gap-1.5 px-3 py-3 text-sm">
              <PhotoIcon className="h-3.5 w-3.5" />
              {intl.formatMessage({
                description: "HomeView - feature badge image filters",
                defaultMessage: "Image Filters",
                id: "uBcX0V",
              })}
            </div>
            <div className="badge badge-soft badge-secondary gap-1.5 px-3 py-3 text-sm">
              <AdjustmentsHorizontalIcon className="h-3.5 w-3.5" />
              {intl.formatMessage({
                description: "HomeView - feature badge adjustments",
                defaultMessage: "Adjustments",
                id: "tY30sv",
              })}
            </div>
            <div className="badge badge-soft badge-accent gap-1.5 px-3 py-3 text-sm">
              <ArrowsPointingOutIcon className="h-3.5 w-3.5" />
              {intl.formatMessage({
                description: "HomeView - feature badge zoom pan",
                defaultMessage: "Zoom & Pan",
                id: "4id1M9",
              })}
            </div>
          </div>

          <div className="w-full max-w-lg">
            <Dropzone onDrop={onDrop} />
          </div>
        </div>
      </div>
    </FullscreenLayout>
  );
}
