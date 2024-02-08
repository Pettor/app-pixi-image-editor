import type { ReactElement } from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props): ReactElement {
  return (
    <div className="m-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="prose card-title">
            <h1>{label}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
