import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function MockBrowserDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="flex h-svh w-svw p-8">
      <div className="mockup-browser flex h-full w-full flex-1 flex-col border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="flex h-full w-full flex-1 justify-center bg-base-200">
          <Story />
        </div>
      </div>
    </div>
  );
}
