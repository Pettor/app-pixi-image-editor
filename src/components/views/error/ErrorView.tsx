import type { ReactElement } from "react";
import { BasicLayout } from "../../layout/BasicLayout";

export interface ErrorViewProps {
  message?: string;
  onHome(): void;
}

export function ErrorView({ message, onHome }: ErrorViewProps): ReactElement {
  return (
    <BasicLayout>
      <div className="flex flex-col gap-4">
        <article className="prose lg:prose-xl">
          <h3 className="text-center">Ops! 😅 </h3>
          <strong>{message ?? "Something went wrong! 😱"}</strong>
        </article>
        {/* <div className="divider divider-vertical w-full h-2" /> */}
        <button className="btn btn-primary mt-4" onClick={onHome}>
          Start over 🦖
        </button>
      </div>
    </BasicLayout>
  );
}
