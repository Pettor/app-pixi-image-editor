import type { ReactElement } from "react";
import { BasicLayout } from "../../layout/BasicLayout";

export interface NotFoundViewProps {
  onBack(): void;
}

export function NotFoundView({ onBack }: NotFoundViewProps): ReactElement {
  return (
    <BasicLayout container>
      <div className="flex flex-col items-center gap-4">
        <article className="prose max-w-64 text-pretty p-4 lg:prose-xl lg:max-w-full">
          <strong>{"Could not find the page you were looking for! 🕵️"}</strong>
        </article>
        <button className="btn btn-primary mt-4 w-48" onClick={onBack}>
          Start over 🦖
        </button>
      </div>
    </BasicLayout>
  );
}
