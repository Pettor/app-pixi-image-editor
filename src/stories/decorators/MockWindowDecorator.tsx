import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function MockWindowDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="flex h-svh w-svw">
      <div className="mockup-window m-8 flex flex-1 border bg-base-300">
        <div className="flex h-full w-full justify-center bg-base-200 px-4 py-6">
          <Story />
        </div>
      </div>
    </div>
  );
}
