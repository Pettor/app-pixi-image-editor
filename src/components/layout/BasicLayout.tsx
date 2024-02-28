import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { GithubIcon } from "~/components/icons/social/GithubIcon";
import { LinkedInIcon } from "~/components/icons/social/LinkedInIcon";

export interface SocialLinkProps {
  onGithubClick?: () => void;
  onLinkedInClick?: () => void;
}

export interface BasicLayoutProps extends SocialLinkProps {
  container?: boolean;
  footer?: boolean;
  children: ReactNode;
}

export function BasicLayout({
  container,
  footer,
  onGithubClick,
  onLinkedInClick,
  children,
}: BasicLayoutProps): ReactElement {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <div className="flex h-full w-full flex-1 flex-col items-center">
        <main
          className={clsx(container && "container", "flex h-full w-full flex-1 flex-col items-center justify-center")}
        >
          {children}
        </main>
      </div>
      {footer && (
        <footer className="footer footer-center gap-y-2 bg-base-300 lg:p-4 text-base-content py-2">
          <aside className="lg:mt-2">
            <p className="text-base font-bold">Made with ☕ by Petter Hancock</p>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-2">
              <button className="btn btn-square btn-ghost fill-primary p-2" onClick={onGithubClick}>
                <GithubIcon />
              </button>
              <button className="btn btn-square btn-ghost fill-primary p-2" onClick={onLinkedInClick}>
                <LinkedInIcon />
              </button>
            </div>
          </nav>
        </footer>
      )}
    </div>
  );
}
