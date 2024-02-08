import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function DocumentationDecorator(Story: StoryFn): ReactElement {
  return (
    <>
      <div className="fixed -left-[200px] -top-[200px] h-[400px] w-[400px] bg-[#c989e8] bg-opacity-50 blur-[150px] content-none" />
      <div className="fixed -right-[200px] -top-[200px] h-[400px] w-[400px] bg-[#b3d4ff] bg-opacity-50 blur-[150px] content-none" />
      <div className="relative h-[100dvh] w-full overflow-auto">
        <div className="z-1 relative m-4">
          <Story />
        </div>
      </div>
    </>
  );
}
