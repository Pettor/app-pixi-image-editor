import { type ReactElement } from "react";
import { ArrowDownTrayIcon, FolderPlusIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import LogoImageSrc from "@package/ui/Branding/assets/template-512x512.svg";
import { useIntl } from "react-intl";
import type { ThemeSwitchProps } from "~/components/actions/theme-switch/ThemeSwitch";
import { ThemeSwitch } from "~/components/actions/theme-switch/ThemeSwitch";

export interface AppDrawerProps {
  open: boolean;
  themeSwitchProps: ThemeSwitchProps;
  onClose: () => void;
  onNewImage: () => void;
  onSaveImage: () => void;
  onAbout: () => void;
}

export function AppDrawer({
  open,
  themeSwitchProps,
  onClose,
  onNewImage,
  onSaveImage,
  onAbout,
}: AppDrawerProps): ReactElement {
  const intl = useIntl();

  function handleNewImage(): void {
    onNewImage();
    onClose();
  }

  function handleSaveImage(): void {
    onSaveImage();
    onClose();
  }

  return (
    <>
      <div className="drawer z-30">
        <input
          id="app-drawer"
          type="checkbox"
          checked={open}
          onChange={() => {}}
          className="drawer-toggle"
          aria-label={intl.formatMessage({
            description: "AppDrawer - drawer toggle label",
            defaultMessage: "Application menu",
            id: "9myrmB",
          })}
        />
        <div className="drawer-content" />
        <div className="drawer-side">
          <label htmlFor="app-drawer" aria-hidden="true" className="drawer-overlay" onClick={onClose} />
          <div className="bg-base-100 text-base-content flex min-h-full w-64 flex-col shadow-2xl md:w-80">
            <div className="border-base-200 flex items-center gap-3 border-b px-5 py-4">
              <img
                className="h-9 w-9"
                src={LogoImageSrc}
                alt={intl.formatMessage({
                  description: "AppDrawer - logo alt text",
                  defaultMessage: "Pixi Image Editor Logo",
                  id: "Lo90xi",
                })}
              />
              <span className="text-lg font-bold">
                {intl.formatMessage({
                  description: "AppDrawer - app name",
                  defaultMessage: "Pixi Image Editor",
                  id: "DrZMkW",
                })}
              </span>
            </div>

            <nav className="flex-1 p-3">
              <ul className="menu w-full gap-1 p-0">
                <li>
                  <button className="drawer-button" data-testid="editor__drawer-new-image" onClick={handleNewImage}>
                    <FolderPlusIcon className="h-5 w-5 shrink-0" />
                    {intl.formatMessage({
                      description: "AppDrawer - new image menu item",
                      defaultMessage: "New Image",
                      id: "UNiGdv",
                    })}
                  </button>
                </li>
                <li>
                  <button className="drawer-button" data-testid="editor__drawer-save-image" onClick={handleSaveImage}>
                    <ArrowDownTrayIcon className="h-5 w-5 shrink-0" />
                    {intl.formatMessage({
                      description: "AppDrawer - save image menu item",
                      defaultMessage: "Save Image",
                      id: "joP9M/",
                    })}
                  </button>
                </li>
              </ul>
            </nav>

            <div className="border-base-200 border-t px-5 py-4">
              <ul className="menu w-full gap-1 p-0 pb-3">
                <li>
                  <button className="drawer-button" data-testid="editor__drawer-about" onClick={onAbout}>
                    <InformationCircleIcon className="h-5 w-5 shrink-0" />
                    {intl.formatMessage({
                      description: "AppDrawer - about menu item",
                      defaultMessage: "About",
                      id: "0kMb+6",
                    })}
                  </button>
                </li>
              </ul>
              <div className="border-base-200 border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-base-content/60 text-sm">
                    {intl.formatMessage({
                      description: "AppDrawer - theme label",
                      defaultMessage: "Theme",
                      id: "9JxsE/",
                    })}
                  </span>
                  <ThemeSwitch {...themeSwitchProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
