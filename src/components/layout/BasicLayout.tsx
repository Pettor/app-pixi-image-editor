import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { GithubIcon } from "~/components/icons/GithubIcon";
import { LinkedInIcon } from "~/components/icons/LinkedInIcon";

export interface BasicLayoutProps {
  container?: boolean;
  footer?: boolean;
  children: ReactNode;
}

export function BasicLayout({ container, footer, children }: BasicLayoutProps): ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <main className={clsx(container && "container", "flex flex-1 justify-center")}>{children}</main>
      </div>
      {footer && (
        <footer className="footer footer-center gap-y-2 bg-base-300 p-4 text-base-content">
          <aside className="mt-2">
            <p className="text-base font-bold">Made with ☕ by Petter Hancock</p>
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-2">
              <button className="btn btn-square btn-ghost fill-primary p-2">
                <GithubIcon />
              </button>
              <button className="btn btn-square btn-ghost fill-primary p-2">
                <LinkedInIcon />
              </button>
            </div>
          </nav>
        </footer>
      )}
    </div>
  );
}
