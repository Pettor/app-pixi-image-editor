import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

export interface BasicLayoutProps {
  container?: boolean;
  children: ReactNode;
}

export function BasicLayout({ container, children }: BasicLayoutProps): ReactElement {
  return (
    <div className="flex h-full w-full flex-1 justify-center">
      <main className={clsx(container && "container", "flex h-full w-full flex-1 justify-center")}>{children}</main>
    </div>
  );
}
