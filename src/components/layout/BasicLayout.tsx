import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

export interface BasicLayoutProps {
  className?: string;
  children: ReactNode;
}

export function BasicLayout({ className, children }: BasicLayoutProps): ReactElement {
  return (
    <div className="container flex max-w-md items-center justify-center">
      <main className={clsx(className, "w-100 mt-32")}>{children}</main>
    </div>
  );
}
